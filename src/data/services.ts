import type { ImageT } from "@/types/image";
export type ServiceCardData = {
	id: string;
	title: string;
	slug: string;
	excerpt: string;
	image: ImageT;
	actionUrl?: string;
	actionLabel?: string;
	sortOrder: number;
};

export type ServiceDescription = {
	slug: string;
	intro: string;
	outro?: string;
	image?: ImageT;
	features?: Array<{
		title: string;
		content: string;
	}>;
};

export const servicesCardsData: ServiceCardData[] = [
	{
		id: "service-343",
		title: "Bespoke Software Development",
		slug: "bespoke-software-development",
		excerpt:
			"Our team of experienced developers has the expertise to craft bespoke software solutions designed to streamline your business processes and drive efficiency.",
		image: {
			src: "https://britlogic.com/wp-content/uploads/2024/05/our-servs-1-org-300x195.jpg",
			alt: "",
		},
		actionUrl: "https://britlogic.com/bespoke-software-development/",
		actionLabel: "Read More",
		sortOrder: 10,
	},
	{
		id: "service-340",
		title: "Consulting Services",
		slug: "consulting-services",
		excerpt:
			"Leverage our expertise to optimize and align technology with your business objectives for sustained growth.",
		image: {
			src: "https://britlogic.com/wp-content/uploads/2024/05/our-servs-2-org-300x195.jpg",
			alt: "",
		},
		actionUrl: "https://britlogic.com/consulting-services/",
		actionLabel: "Read More",
		sortOrder: 20,
	},
	{
		id: "service-337",
		title: "UX/UI Design",
		slug: "ux-ui-design",
		excerpt:
			"Our design experts create intuitive, user-friendly interfaces that enhance the user experience and leave a lasting impression..",
		image: {
			src: "https://britlogic.com/wp-content/uploads/2024/05/our-servs-3-org-300x194.jpg",
			alt: "",
		},
		actionUrl: "https://britlogic.com/ux-ui-design/",
		actionLabel: "Read More",
		sortOrder: 30,
	},
	{
		id: "service-334",
		title: "Legacy System Modernization",
		slug: "legacy-system-modernization",
		excerpt:
			"Is your legacy software holding you back? Our experts can help you modernize your systems, improving performance, scalability, and security.",
		image: {
			src: "https://britlogic.com/wp-content/uploads/2024/05/our-servs-4-org-300x195.jpg",
			alt: "",
		},
		actionUrl: "https://britlogic.com/legacy-system-modernization/",
		actionLabel: "Read More",
		sortOrder: 40,
	},
	{
		id: "service-1110",
		title: "Quality Assurance",
		slug: "quality-assurance",
		excerpt:
			"Ensure the reliability and performance of your software with comprehensive quality assurance and testing services.",
		image: {
			src: "https://britlogic.com/wp-content/uploads/2024/05/quality1-300x194.png",
			alt: "",
		},
		actionUrl: "https://britlogic.com/quality-assurance/",
		actionLabel: "Read More",
		sortOrder: 50,
	},
	{
		id: "service-1108",
		title: "Cloud Solutions",
		slug: "cloud-solutions",
		excerpt:
			"Embrace the power of the cloud with our scalable and secure cloud solutions. Whether you need cloud migration, infrastructure management, or SaaS development, we’ve got you covered.",
		image: {
			src: "https://britlogic.com/wp-content/uploads/2024/05/cloud-300x194.png",
			alt: "",
		},
		actionUrl: "https://britlogic.com/cloud-solutions/",
		actionLabel: "Read More",
		sortOrder: 60,
	},
];

export const services: ServiceDescription[] = [
	{
		slug: "bespoke-software-development",
		intro: `Our team of experienced developers has the expertise to craft bespoke software solutions designed to streamline your business processes and drive efficiency.
		
		Here&apos;s an overview of the bespoke software development process:`,
		outro: `Bespoke software development offers several advantages over off-the-shelf solutions, including:

<ul>
	<li><b>Customization</b>: The software is tailored precisely to the client’s needs, offering features and functionality that are not available in off-the-shelf solutions.</li>
	<li><b>Scalability</b>: Bespoke software can be designed to scale with the growth of the business, accommodating increased data volumes, users, and functionality.</li>
	<li><b>Competitive Advantage</b>: Custom software can provide a competitive edge by enabling unique processes, improving efficiency, and enhancing customer experiences.</li>
	<li><b>Ownership</b>: The client owns the source code and intellectual property rights, giving them full control over the software and its future development.</li>
</ul>
		
However, bespoke software development can also have challenges, such as higher initial costs, longer development times, and the need for ongoing maintenance and support. Organizations considering bespoke software should carefully weigh these factors against the benefits to determine the best approach for their needs.`,
		features: [
			{
				title: "Requirement Gathering",
				content:
					"This phase involves understanding the client’s objectives, business processes, and specific needs that the software must address. This often includes discussions, interviews, and documentation to capture all necessary requirements.",
			},
			{
				title: "Design",
				content:
					"Once requirements are gathered, the design phase begins. This involves creating a blueprint or design document outlining the architecture, user interface, data structures, and functionality of the software.",
			},
			{
				title: "Development",
				content:
					"In this stage, developers start writing the code based on the design specifications. Depending on the complexity of the project, development may involve various programming languages, frameworks, and tools.",
			},
			{
				title: "Testing",
				content:
					"Testing is a crucial step to ensure that the software functions correctly and meets the specified requirements. This includes various types of testing such as unit testing, integration testing, and user acceptance testing (UAT).",
			},
			{
				title: "Deployment",
				content:
					"Once the software has been thoroughly tested and approved, it is deployed into the production environment. This may involve installing the software on servers, configuring it, and providing necessary training to users.",
			},
			{
				title: "Maintenance and Support",
				content:
					"After deployment, the software requires ongoing maintenance and support to address any issues, implement updates, and accommodate changes in the business environment.",
			},
		],
	},
];
