import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { IncomingForm } from "formidable";

export const config = {
	api: {
		bodyParser: false,
	},
};

const BRIT_LOGIC_CONTACT_EMAIL_USER = process.env.BRIT_LOGIC_CONTACT_EMAIL_USER;
const BRIT_LOGIC_CONTACT_EMAIL_PASS = process.env.BRIT_LOGIC_CONTACT_EMAIL_PASS;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const BRIT_LOGIC_CONTACT_RECIPIENT_EMAIL = process.env.BRIT_LOGIC_CONTACT_RECIPIENT_EMAIL;

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	if (req.method !== "POST") {
		return res.status(405).json({ success: false, message: "Method not allowed" });
	}

	try {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const data: any = await new Promise((resolve, reject) => {
			const form = new IncomingForm();
			form.parse(req, (err, fields) => {
				if (err) return reject(err);
				resolve(fields);
			});
		});

		const { firstName, lastName, email, phone, company, message } = data;

		// Validate required fields
		if (!firstName || !lastName || !email || !message) {
			return res.status(400).json({
				success: false,
				message: "Please fill in all required fields.",
			});
		}

		// Set up email transporter
		const transporter = nodemailer.createTransport({
			host: SMTP_HOST,
			port: Number(SMTP_PORT),
			secure: true,
			auth: {
				user: BRIT_LOGIC_CONTACT_EMAIL_USER,
				pass: BRIT_LOGIC_CONTACT_EMAIL_PASS,
			},
		});

		// Email to company recipient
		await transporter.sendMail({
			from: `"BritLogic Contact Form" <${BRIT_LOGIC_CONTACT_EMAIL_USER}>`,
			to: BRIT_LOGIC_CONTACT_RECIPIENT_EMAIL,
			subject: `New Contact Form Message from ${firstName} ${lastName}`,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${firstName} ${lastName}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Phone:</strong> ${phone || "Not provided"}</p>
				<p><strong>Company:</strong> ${company || "Not provided"}</p>
				<h3>Message:</h3>
				<p>${message}</p>
			`,
		});

		// Confirmation email to sender
		await transporter.sendMail({
			from: `"BritLogic" <${BRIT_LOGIC_CONTACT_EMAIL_USER}>`,
			to: email,
			subject: `Thank you for contacting BritLogic`,
			html: `
				<h2>Thank you for contacting BritLogic</h2>
				<p>Dear ${firstName},</p>
				<p>We have received your message and will get back to you as soon as possible.</p>
				<p>Here's a copy of your message:</p>
				<blockquote style="padding: 10px; background-color: #f5f5f5; border-left: 5px solid #ccc;">
					${message}
				</blockquote>
				<p>Best regards,<br/>The BritLogic Team</p>
			`,
		});

		res.status(200).json({
			success: true,
			message: "Your message has been sent successfully!",
		});
	} catch (error) {
		console.error("Error sending contact form:", error);
		res.status(500).json({
			success: false,
			message: "Failed to send your message. Please try again later.",
		});
	}
}
