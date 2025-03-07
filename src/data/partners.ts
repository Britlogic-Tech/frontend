import type { ImageT } from "@/types/image";
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

export interface TestimonyData {
	name: string;
	companyName: string;
	position: string;
	testimony: string;
	image: Omit<ImageT, "height" & "width">;
}

export const testimonies: TestimonyData[] = [
	{
		name: "John Doe",
		companyName: "ACME Inc.",
		position: "CEO",
		testimony:
			"Our experience with BritLogic has been nothing short of exceptional. Their team of experts delivered a custom software solution that exceeded our expectations. We look forward to working with them again in the future.",
		image: {
			src: "/images/3rd-party/ceo.jpg",
			alt: "John Doe",
		},
	},
	{
		name: "John Doe",
		companyName: "ACME Inc.",
		position: "CEO",
		testimony:
			"Our experience with BritLogic has been nothing short of exceptional. Their team of experts delivered a custom software solution that exceeded our expectations. We look forward to working with them again in the future.",
		image: {
			src: "/images/3rd-party/ceo.jpg",
			alt: "John Doe",
		},
	},
];

export const partnerData: PartnerData[] = [
	{
		id: "partner-100",
		title: "Oja Global",
		image: {
			src: "/images/partners/oja-global.png",
			alt: "Oja Global",
		},
		url: "https://britlogic.com/partner-microsoft/",
		sortOrder: 10,
	},
	{
		id: "partner-101",
		title: "Whitbread",
		image: {
			src: "/images/partners/whitbread.png",
			alt: "",
		},
		url: "https://britlogic.com/partner-microsoft/",
		sortOrder: 20,
	},
	{
		id: "partner-102",
		title: "Tide",
		image: {
			src: "/images/partners/tide.png",
			alt: "Tide",
		},
		url: "https://britlogic.com/partner-microsoft/",
		sortOrder: 30,
	},
	{
		id: "partner-103",
		title: "News UK",
		image: {
			src: "/images/partners/news-uk.png",
			alt: "News UK",
		},
		url: "https://britlogic.com/partner-microsoft/",
		sortOrder: 40,
	},
];
