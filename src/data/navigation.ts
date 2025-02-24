export type NavigationData = {
	title: string;
	url: string;
	view?: string;
};

export const navigationData: NavigationData[] = [
	{ title: "Our services", url: "/services", view: "NavBarServices" },
	{ title: "About us", url: "/about", view: "NavBarAboutUs" },
	{ title: "Our clients", url: "/blog" },
];
