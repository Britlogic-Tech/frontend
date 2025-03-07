type JobOpprtunity = {
	title: string;
	category: string;
	positionType: "Full-Time" | "Part-Time" | "Internship" | "Contract";
	location: string[];
	postingDate: string;
	closingDate: string;
	description: string;
	isActive: boolean;
	slug: string;
	level?: "Entry" | "Mid" | "Senior" | "Lead";
	experience?: string;
	skills?: string[];
	salary?: string;
};

export const jobsData: JobOpprtunity[] = [
	{
		title: "Software Developer",
		category: "Software Engineering",
		positionType: "Full-Time",
		location: ["Mountain View, CA"],
		postingDate: "2020-01-01",
		closingDate: "2020-12-31",
		description: "Worked on the Google Search team to improve search results.",
		isActive: true,
		slug: "https://careers.google.com/jobs/results/",
		level: "Senior",
		experience: "5+ years",
		skills: ["Java", "Python", "C++"],
	},
	{
		title: "Software Developer",
		category: "Software Engineering",
		positionType: "Full-Time",
		location: ["Mountain View, CA"],
		postingDate: "2020-01-01",
		closingDate: "2020-12-31",
		description: "Worked on the Google Search team to improve search results.",
		isActive: true,
		slug: "https://careers.google.com/jobs/results/",
		level: "Senior",
		experience: "5+ years",
		skills: ["Java", "Python", "C++"],
	},
	{
		title: "Software Developer",
		category: "Software Engineering",
		positionType: "Full-Time",
		location: ["Mountain View, CA"],
		postingDate: "2020-01-01",
		closingDate: "2020-12-31",
		description: "Worked on the Google Search team to improve search results.",
		isActive: true,
		slug: "https://careers.google.com/jobs/results/",
		level: "Senior",
		experience: "5+ years",
		skills: ["Java", "Python", "C++"],
	},
];
