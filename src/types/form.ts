export type FormData = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	company: string;
	message: string;
};

export type FormErrors = Partial<FormData> & { submit?: string };
