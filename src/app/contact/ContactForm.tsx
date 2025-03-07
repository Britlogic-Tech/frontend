"use client";
import type { FormErrors, FormData } from "@/types/form";
import { useState, ChangeEvent, FormEvent } from "react";
import { validate } from "@/lib/validateForm";
import Button from "@/components/buttons/Button";
import { Section, SubSection, Article } from "@/components/structure/core";

export default function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		company: "",
		message: "",
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const validationErrors = validate(formData);

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setErrors({});
		setIsSubmitting(true);

		// Simulate form submission
		try {
			// Replace with actual API call
			await new Promise<void>((resolve) => setTimeout(resolve, 1000));
			setSubmitSuccess(true);
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				company: "",
				message: "",
			});
		} catch (error) {
			console.error("Form submission error:", error);
			setErrors({ submit: "There was a problem submitting your form. Please try again." });
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Section className="py-12">
			<SubSection>
				<Article className="max-w-2xl mx-auto">
					<h3 className="py-8 font-normal">
						Get in touch with us today to discuss how we can help you harness the power of
						technology to achieve your goals.
					</h3>

					<div className="form-contact">
						{submitSuccess ? (
							<div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
								<h3 className="text-xl font-semibold mb-2">Thank you for your message!</h3>
								<p>We&aposve received your inquiry and will get back to you shortly.</p>
								<Button
									onClick={() => setSubmitSuccess(false)}
									label="Send another message"
								/>
							</div>
						) : (
							<>
								<form
									onSubmit={handleSubmit}
									className="space-y-6"
								>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label
												htmlFor="firstName"
												className="block text-sm font-medium text-gray-700 mb-1"
											>
												First Name*
											</label>
											<input
												type="text"
												id="firstName"
												name="firstName"
												value={formData.firstName}
												onChange={handleChange}
												className={`w-full px-3 py-2 border rounded-md ${
													errors.firstName ? "border-red-500" : "border-gray-300"
												}`}
											/>
											{errors.firstName && (
												<p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
											)}
										</div>

										<div>
											<label
												htmlFor="lastName"
												className="block text-sm font-medium text-gray-700 mb-1"
											>
												Last Name*
											</label>
											<input
												type="text"
												id="lastName"
												name="lastName"
												value={formData.lastName}
												onChange={handleChange}
												className={`w-full px-3 py-2 border rounded-md ${
													errors.lastName ? "border-red-500" : "border-gray-300"
												}`}
											/>
											{errors.lastName && (
												<p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
											)}
										</div>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Email Address*
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											className={`w-full px-3 py-2 border rounded-md ${
												errors.email ? "border-red-500" : "border-gray-300"
											}`}
										/>
										{errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
									</div>

									<div>
										<label
											htmlFor="phone"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Phone Number
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											className={`w-full px-3 py-2 border rounded-md ${
												errors.phone ? "border-red-500" : "border-gray-300"
											}`}
										/>
										{errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
									</div>

									<div>
										<label
											htmlFor="company"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Company Name
										</label>
										<input
											type="text"
											id="company"
											name="company"
											value={formData.company}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md"
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Message*
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											rows={6}
											className={`w-full px-3 py-2 border rounded-md ${
												errors.message ? "border-red-500" : "border-gray-300"
											}`}
										></textarea>
										{errors.message && (
											<p className="mt-1 text-sm text-red-600">{errors.message}</p>
										)}
									</div>

									{errors.submit && (
										<div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded">
											{errors.submit}
										</div>
									)}

									<div className="flex justify-center">
										<Button
											isDisabled={isSubmitting}
											label={isSubmitting ? "Sending..." : "Send Message"}
											variant="primary"
											type="submit"
											iconName="Send"
											onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
										/>
									</div>
								</form>
							</>
						)}
					</div>
				</Article>
			</SubSection>
		</Section>
	);
}
