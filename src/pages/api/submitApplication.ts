import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";
import { jobsData } from "@/data/career";

// Disable the default body parser to handle form data with files
export const config = {
	api: {
		bodyParser: false,
	},
};

const BRIT_LOGIC_CAREER_EMAIL_USER = process.env.BRIT_LOGIC_CAREER_EMAIL_USER;
const BRIT_LOGIC_CAREER_EMAIL_PASS = process.env.BRIT_LOGIC_CAREER_EMAIL_PASS;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const BRIT_LOGIC_HIRING_MANAGER_EMAIL = process.env.BRIT_LOGIC_HIRING_MANAGER_EMAIL;

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	if (req.method !== "POST") {
		return res.status(405).json({ success: false, message: "Method not allowed" });
	}

	try {
		// Ensure tmp directory for cv's exists
		const tmpDir = path.join(process.cwd(), "cvs");
		if (!fs.existsSync(tmpDir)) {
			fs.mkdirSync(tmpDir, { recursive: true });
		}

		//eslint-disable-next-line @typescript-eslint/no-explicit-any
		const data: any = await new Promise((resolve, reject) => {
			const form = new IncomingForm({
				uploadDir: path.join(process.cwd(), "cvs"),
				keepExtensions: true,
			});

			form.parse(req, (err, fields, files) => {
				if (err) return reject(err);
				resolve({ fields, files });
			});
		});

		const { fields, files } = data;

		const jobId = fields.jobId[0];
		const firstName = fields.firstName[0];
		const lastName = fields.lastName[0];
		const email = fields.email[0];
		const phone = fields.phone ? fields.phone[0] : "Not provided";
		const coverLetter = fields.coverLetter ? fields.coverLetter[0] : "Not provided";

		// Find job title from jobData
		const job = jobsData.find((job) => job.id === jobId);
		const jobTitle = job ? job.title : "Unknown Position";

		// CV file info
		const resumeFile = files.resume[0];
		const filePath = resumeFile.filepath;
		const fileName = `${firstName}_${lastName}_Resume${path.extname(resumeFile.originalFilename)}`;

		// Set up email transporter
		const transporter = nodemailer.createTransport({
			host: SMTP_HOST,
			port: Number(SMTP_PORT),
			secure: true, // true for 465, false for other ports
			auth: {
				user: BRIT_LOGIC_CAREER_EMAIL_USER,
				pass: BRIT_LOGIC_CAREER_EMAIL_PASS,
			},
		});

		// Email to hiring manager
		await transporter.sendMail({
			from: `"BritLogic Careers" <${BRIT_LOGIC_CAREER_EMAIL_USER}>`,
			to: BRIT_LOGIC_HIRING_MANAGER_EMAIL,
			subject: `New Job Application: ${jobTitle} from ${firstName} ${lastName}`,
			html: `
        <h2>New Job Application Submitted</h2>
        <p><strong>Position:</strong> ${jobTitle}</p>
        <p><strong>Applicant:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Cover Letter:</h3>
        <p>${coverLetter}</p>
      `,
			attachments: [
				{
					filename: fileName,
					path: filePath,
				},
			],
		});

		// Confirmation email to applicant
		await transporter.sendMail({
			from: `"BritLogic Careers" <${BRIT_LOGIC_CAREER_EMAIL_USER}>`,
			to: email,
			subject: `BritLogic - We've Received Your Application for ${jobTitle}`,
			html: `
        <h2>Thank you for applying to BritLogic!</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your application for the <strong>${jobTitle}</strong> position.</p>
        <p>Our hiring team is currently reviewing all applications and we will be in touch if you are selected for the next stage of the recruitment process.</p>
        <p>Thank you for your interest in joining our team!</p>
        <p>Best regards,<br/>BritLogic Hiring Team</p>
      `,
		});

		// Clean up temporary file
		fs.unlinkSync(filePath);

		res.status(200).json({
			success: true,
			message: "Application submitted successfully",
		});
	} catch (error) {
		console.error("Error processing application:", error);
		res.status(500).json({
			success: false,
			message: "Failed to process your application. Please try again.",
		});
	}
}
