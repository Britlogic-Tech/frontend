export type NavigationData = {
	title: string;
	url: string;
	sortOrder: number;
};

export const navigation_data: NavigationData[] = [
	{ title: "Home", url: "/", sortOrder: 10 },
	{ title: "About us", url: "/about", sortOrder: 20 },
	{ title: "Our services", url: "/services", sortOrder: 30 },
	{ title: "Our clients", url: "/blog", sortOrder: 40 },
	{ title: "Career", url: "/career", sortOrder: 50 },
	{ title: "Contact", url: "/contact", sortOrder: 60 },
];
