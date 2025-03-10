"use client";
import Button from "@/components/buttons/Button";

export default function ApplicationForm({
	id,
	title,
	subtitle,
}: {
	id: string;
	title?: string;
	subtitle?: string;
}) {
	return (
		<div className="form-application">
			<h2>{title}</h2>
			<p>{subtitle}</p>
			<form>
				<input
					type="hidden"
					id="form-id"
					name="id"
					value={id}
				/>
				<div className="form-group">
					<label htmlFor="first-name">First Name</label>
					<input
						type="text"
						id="first-name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="last-name">Last Name</label>
					<input
						type="text"
						id="last-name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="telephone">Phone Number</label>
					<input
						type="phone"
						id="phone"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="resume">Resume</label>
					<input
						type="file"
						id="resume"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="cover-letter">Cover Letter</label>
					<textarea id="cover-letter" />
				</div>
				<Button
					type="submit"
					label="Submit"
				/>
			</form>
		</div>
	);
}
