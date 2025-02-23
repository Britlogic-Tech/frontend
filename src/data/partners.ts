export interface PartnerData {
	id: string;
	title: string;
	image: {
		src: string;
		alt?: string;
	};
	url?: string;
	sortOrder?: number;
}
export const partner_data: PartnerData[] = [
	{
		id: "partner-100",
		title: "Oja Global",
		image: {
			src: "https://britlogic.com/wp-content/uploads/2024/05/partner-1.png",
			alt: "",
		},
		url: "https://britlogic.com/partner-microsoft/",
		sortOrder: 10,
	},
	{
		id: "partner-101",
		title: "Whitbread",
		image: {
			src: "https://britlogic.com/wp-content/uploads/2024/05/partner-1.png",
			alt: "",
		},
		url: "https://britlogic.com/partner-microsoft/",
		sortOrder: 20,
	},
	{
		id: "partner-102",
		title: "Tide",
		image: {
			src: "https://britlogic.com/wp-content/uploads/2024/05/partner-1.png",
			alt: "",
		},
		url: "https://britlogic.com/partner-microsoft/",
		sortOrder: 30,
	},
	{
		id: "partner-103",
		title: "News UK",
		image: {
			src: "https://britlogic.com/wp-content/uploads/2024/05/partner-1.png",
			alt: "",
		},
		url: "https://britlogic.com/partner-microsoft/",
		sortOrder: 40,
	},
];
