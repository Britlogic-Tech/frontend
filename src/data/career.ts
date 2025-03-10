export type JobOpprtunityT = {
	id: string;
	title: string;
	category: string;
	positionType: "Full-Time" | "Part-Time" | "Internship" | "Contract";
	location: string[];
	postingDate: string;
	closingDate: string;

	isActive: boolean;
	slug: string;
	detail: {
		description: string;
		level?: "Entry" | "Mid" | "Senior" | "Lead";
		experience?: string;
		skills?: string[];
		salary?: string;
	};
	benefits?: string[];
};

export const pageIntro = `We are always looking for talented individuals to join our team`;

export const jobsData: JobOpprtunityT[] = [
	{
		id: "britlogictexh-internal-001",
		category: "Engineering",
		title: "Software Developer",
		positionType: "Full-Time",
		location: ["Mountain View, CA"],
		postingDate: "2020-01-01",
		closingDate: "2020-12-31",
		detail: {
			description: `Worked on the Google Search team to improve search results.
			loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
			`,
			skills: ["Java", "Python", "C++"],
			level: "Senior",
			experience: "5+ years",
			salary: "$200,000",
		},
		isActive: true,
		slug: "software-developer-internal-001",
		benefits: [
			"25 days of paid holidays per year",
			"Free gym membership",
			"Healthcare",
			"Stock options",
		],
	},
	{
		id: "britlogictexh-internal-002",
		category: "Engineering",
		title: "Software Engineer",
		positionType: "Full-Time",
		location: ["Remote", "London", "Watford"],
		postingDate: "2023-01-01",
		closingDate: "2023-01-31",

		detail: {
			description:
				"We are looking for a skilled software engineer to join our team. You will be responsible for developing high-quality applications, collaborating with cross-functional teams, and contributing to all phases of the development lifecycle.",
			skills: ["Java", "Python", "C++"],
			level: "Senior",
			experience: "5+ years",
			salary: "$200,000",
		},

		isActive: true,
		slug: "software-engineer-internal-002",
	},
];
