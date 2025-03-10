"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import Button from "@/components/buttons/Button";
import SubmissionStatus from "./SubmissionStatus";

const JOB_APPLICATION_API_URL = "/api/submitApplication";

export default function ApplicationForm({
	id,
	title,
	subtitle,
}: {
	id: string;
	title?: string;
	subtitle?: string;
}) {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		coverLetter: "",
	});
	const [resumeFile, setResumeFile] = useState<File | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{
		success?: boolean;
		message?: string;
	}>({});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target;
		setFormData({
			...formData,
			[id === "first-name"
				? "firstName"
				: id === "last-name"
				? "lastName"
				: id === "cover-letter"
				? "coverLetter"
				: id]: value,
		});
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			const fileName = file.name;
			const fileExtension = fileName.split(".").pop()?.toLowerCase();

			// Check if file extension is allowed
			if (fileExtension === "pdf" || fileExtension === "doc" || fileExtension === "docx") {
				setResumeFile(file);
				// Clear any previous error related to file type
				if (submitStatus.message?.includes("file type")) {
					setSubmitStatus({});
				}
			} else {
				setResumeFile(null);
				setSubmitStatus({
					success: false,
					message: "Please upload a PDF, DOC, or DOCX file for your resume.",
				});
				// Reset the file input
				e.target.value = "";
			}
		}
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		// Basic validation
		if (!formData.firstName || !formData.lastName || !formData.email || !resumeFile) {
			setSubmitStatus({
				success: false,
				message: "Please fill all required fields and attach your resume.",
			});
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus({});

		try {
			// Create form data to send file
			const data = new FormData();
			data.append("jobId", id);
			data.append("firstName", formData.firstName);
			data.append("lastName", formData.lastName);
			data.append("email", formData.email);
			data.append("phone", formData.phone);
			data.append("coverLetter", formData.coverLetter);
			if (resumeFile) {
				data.append("resume", resumeFile);
			}

			const response = await fetch(JOB_APPLICATION_API_URL, {
				method: "POST",
				body: data,
			});

			const result = await response.json();

			if (result.success) {
				setSubmitStatus({
					success: true,
					message:
						"Your application has been submitted successfully! Check your email for confirmation.",
				});
				// Reset form
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					coverLetter: "",
				});
				setResumeFile(null);
			} else {
				throw new Error(result.message || "Failed to submit application");
			}
		} catch (error) {
			console.error("Error submitting application:", error);
			setSubmitStatus({
				success: false,
				message:
					error instanceof Error
						? error.message
						: "An error occurred while submitting your application.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	if (submitStatus.success) {
		return <SubmissionStatus status={submitStatus} />;
	}
	return (
		<>
			<div className="form-application">
				<h2>{title}</h2>
				<p>{subtitle}</p>

				{submitStatus.message && (
					<div className={`form-status ${submitStatus.success ? "success" : "error"}`}>
						{submitStatus.message}
					</div>
				)}

				<form onSubmit={handleSubmit}>
					<input
						type="hidden"
						id="form-id"
						name="id"
						value={id}
					/>
					<div className="form-group">
						<label htmlFor="first-name">First Name *</label>
						<input
							type="text"
							id="first-name"
							value={formData.firstName}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="last-name">Last Name *</label>
						<input
							type="text"
							id="last-name"
							value={formData.lastName}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email *</label>
						<input
							type="email"
							id="email"
							value={formData.email}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phone">Phone Number</label>
						<input
							type="tel"
							id="phone"
							value={formData.phone}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="resume">Resume *</label>
						<input
							type="file"
							id="resume"
							onChange={handleFileChange}
							accept=".pdf,.doc,.docx"
							required
						/>
						<span className="form-hint">Note: Accepted file types: PDF, DOC, DOCX </span>
					</div>
					<div className="form-group">
						<label htmlFor="cover-letter">Cover Letter</label>
						<textarea
							id="cover-letter"
							value={formData.coverLetter}
							onChange={handleInputChange}
						/>
					</div>
					<Button
						type="submit"
						label={isSubmitting ? "Submitting..." : "Submit Application"}
						isDisabled={isSubmitting}
					/>
				</form>
			</div>
		</>
	);
}
