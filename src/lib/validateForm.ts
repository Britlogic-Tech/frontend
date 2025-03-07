import type { FormErrors, FormData } from "@/types/form";

export const validate = (formData: FormData): FormErrors => {
	const newErrors: FormErrors = {};

	// Validate first name
	if (!formData.firstName.trim()) {
		newErrors.firstName = "First name is required";
	}

	// Validate last name
	if (!formData.lastName.trim()) {
		newErrors.lastName = "Last name is required";
	}

	// Validate email
	if (!formData.email.trim()) {
		newErrors.email = "Email is required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
		newErrors.email = "Invalid email address";
	}

	// Validate phone (optional but must be valid if provided)
	if (formData.phone && !/^\+?[0-9\s()-]{7,}$/.test(formData.phone)) {
		newErrors.phone = "Please enter a valid phone number";
	}

	// Validate message
	if (!formData.message.trim()) {
		newErrors.message = "Please enter your message";
	}

	return newErrors;
};
