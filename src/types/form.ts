// filepath: /src/types/form.ts
export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
}

export interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    company?: string;
    message?: string;
    submit?: string;
}