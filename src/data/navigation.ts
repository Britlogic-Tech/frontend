import { gatNavigationDataItems } from "@/lib/getServiceNavCardItems";

export type NavigationData = {
	title: string;
	url: string;
	viewName?: string;
	items?: { title: string; slug: string; href: string }[];
};

export const navigationData: NavigationData[] = [
	{
		title: "Our services",
		url: "/services",
		viewName: "NavBarServices",
		items: gatNavigationDataItems(),
	},
	{
		title: "About us",
		url: "/about",
		viewName: "NavBarAboutUs",
		items: [
			{
				title: "About BritLogic",
				slug: "about",
				href: "",
			},
			{
				title: "Contact BritLogic",
				slug: "contact",
				href: "",
			},
			{
				title: "Join our team",
				slug: "career",
				href: "",
			},
		],
	},
	{ title: "Our clients", url: "/clients" },
];
