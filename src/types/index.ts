export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: string;
    technologies: string[];
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
    serviceOfInterest: string;
}
