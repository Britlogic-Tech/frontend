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
		group?: string;
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
	{
		slug: "consulting-services",
		intro: `Leverage our expertise to optimize and align technology with your business objectives for sustained growth. Whether you need guidance on technology strategy or assistance with project management, our consultants are here to help you navigate the complexities of the digital landscape.

Here’s an overview of various types of consulting services:`,
		outro: `Consulting services can be provided on a project basis, as part of ongoing advisory relationships, or through specialized workshops and training programs. Consultants typically have expertise in specific industries or functional areas and use their knowledge and experience to offer tailored solutions to their clients’ needs.`,

		features: [
			{
				title: "Management Consulting",
				content:
					"Management consultants advise organizations on how to improve their performance and operations. This can include strategic planning, organizational restructuring, process improvement, and change management.",
			},
			{
				title: "Strategy Consulting",
				content:
					"Strategy consultants help organizations develop and execute strategic plans to achieve their long-term goals. They analyze market trends, competition, and industry dynamics to provide insights and recommendations for growth and competitive advantage.",
			},
			{
				title: "IT Consulting",
				content:
					"IT consultants assist organizations with technology-related challenges and opportunities. This can involve IT strategy development, software selection and implementation, cybersecurity, infrastructure design, and digital transformation.",
			},
			{
				title: "Financial Consulting",
				content:
					"Financial consultants offer expertise in financial management, planning, and analysis. They assist clients with budgeting, financial forecasting, risk management, investment strategies, mergers and acquisitions, and other financial matters.",
			},
			{
				title: "Human Resources Consulting",
				content:
					"HR consultants provide guidance on various aspects of human resource management, including talent acquisition, performance management, employee engagement, compensation and benefits, training and development, and HR technology solutions.",
			},
			{
				title: "Marketing and Sales Consulting",
				content:
					"Marketing and sales consultants help businesses develop effective marketing strategies, customer acquisition tactics, sales processes, and branding initiatives. They may also provide expertise in digital marketing, market research, and customer relationship management (CRM).",
			},
			{
				title: "Environmental Consulting",
				content:
					"Environmental consultants advise organizations on environmental regulations, sustainability practices, pollution control, waste management, and environmental impact assessments.",
			},
			{
				title: "Legal Consulting",
				content:
					"Legal consultants offer specialized legal advice and assistance to businesses and individuals on specific legal matters such as contracts, intellectual property, regulatory compliance, litigation support, and corporate governance.",
			},
			{
				title: "Healthcare Consulting",
				content:
					"Healthcare consultants work with healthcare organizations, providers, and insurers to improve patient care, operational efficiency, regulatory compliance, healthcare IT systems, and strategic planning.",
			},
			{
				title: "Education Consulting",
				content:
					"Education consultants assist educational institutions, government agencies, and private organizations with curriculum development, instructional design, educational technology integration, accreditation, and school improvement initiatives.",
			},
		],
	},
	{
		slug: "ux-ui-design",
		intro: `<p>Our design experts create intuitive, user-friendly interfaces that enhance the user experience and leave a lasting impression.</p>
		<br>
		<p><b>User Experience (UX) design</b> focuses on enhancing the overall experience that users have when interacting with a product or service. It involves understanding users’ needs, preferences, behaviours, and pain points to create intuitive, meaningful, and enjoyable experiences.</p>
			<p><b>User Interface (UI) design</b> focuses on the visual aspects of the product, including layout, typography, color scheme, and visual elements. UI design aims to create visually appealing interfaces that are easy to understand and use.</p>
			<br>
			<p>Key principles of UX/UI design include:</p>`,
		features: [
			{
				group: "User Experience (UX) Design",
				title: "User Research",
				content:
					"Conducting research to understand users’ goals, motivations, and challenges. This may involve user interviews, surveys, usability testing, and analysis of user data.",
			},
			{
				group: "User Experience (UX) Design",
				title: "Information Architecture",
				content:
					"Organising and structuring content and features in a way that is logical, intuitive, and easy to navigate. This includes creating sitemaps, user flows, and wireframes to plan the layout and structure of the product.",
			},
			{
				group: "User Experience (UX) Design",
				title: "Interaction Design",
				content:
					"Designing interactive elements and user interfaces that facilitate smooth and efficient user interactions. This includes designing navigation menus, buttons, forms, and other interactive components.",
			},
			{
				group: "User Experience (UX) Design",
				title: "Usability Testing",
				content:
					"Testing prototypes or designs with real users to gather feedback and identify usability issues. Usability testing helps ensure that the product meets users’ needs and expectations.",
			},
			{
				group: "User Experience (UX) Design",
				title: "Accessibility",
				content:
					"Ensuring that the product is accessible to users with disabilities by following accessibility guidelines and standards. This may involve designing for screen readers, keyboard navigation, and colour contrast.",
			},
			{
				group: "User Experience (UX) Design",
				title: "Iteration and Improvement",
				content:
					"Continuously iterating on designs based on user feedback and testing results to improve the user experience over time.",
			},
			{
				title: "Visual Hierarchy",
				content:
					"Organizing elements on the interface to prioritize important content and guide users’ attention. This involves using size, colour, contrast, and spacing to create a clear visual hierarchy.",
				group: "User Interface (UI) Design",
			},
			{
				title: "Typography",
				content:
					"Choosing appropriate fonts, font sizes, and typography styles to enhance readability and convey the brand’s personality. Consistent typography helps create a cohesive and polished look.",
				group: "User Interface (UI) Design",
			},
			{
				title: "Colour Scheme",
				content:
					"Selecting a colour palette that reflects the brand identity and evokes the desired emotions. Colour can be used to create visual interest, establish hierarchy, and communicate meaning.",
				group: "User Interface (UI) Design",
			},
			{
				title: "Visual Consistency",
				content:
					"Maintaining consistency in design elements, such as buttons, icons, and layouts, to provide a cohesive and familiar user experience. Consistent design patterns help users navigate the interface more easily.",
				group: "User Interface (UI) Design",
			},
			{
				title: "Responsive Design",
				content:
					"Designing interfaces that adapt to different screen sizes and devices, ensuring a consistent user experience across desktop, tablet, and mobile devices.",
				group: "User Interface (UI) Design",
			},
			{
				title: "Prototyping",
				content:
					"Creating interactive prototypes or mock-ups to visualize and test the UI design before implementation. Prototyping helps identify design issues early and iterate on the design more effectively.",
				group: "User Interface (UI) Design",
			},
		],
		outro:
			"Effective UX design is an ongoing process of understanding users, testing solutions, and refining experiences to create products that are not only functional but also enjoyable to use. Our UX experts are committed to delivering designs that drive engagement, improve satisfaction, and contribute to your business success.",
	},
	{
		slug: "legacy-system-modernization",
		intro:
			"Is your legacy software holding you back? Our experts can help you modernize your systems, improving performance, scalability, and security.\n\nThere are several approaches to legacy system modernization, including:",
		features: [
			{
				title: "Migration",
				content:
					"This involves moving data and functionality from the legacy system to a new platform or architecture. It can be a gradual process, with components of the legacy system being migrated incrementally.",
			},
			{
				title: "Re-engineering",
				content:
					"This approach involves reimagining and rebuilding the existing system using modern technologies and methodologies while preserving its core functionality and business logic.",
			},
			{
				title: "Replacement",
				content:
					"Sometimes it’s more practical to replace the entire legacy system with a commercially available off-the-shelf solution or a custom-built system that better meets current requirements.",
			},
			{
				title: "Integration",
				content:
					"In cases where it’s not feasible to replace or migrate the entire system, integration with newer systems or technologies can help extend the life and functionality of the legacy system.",
			},
			{
				title: "Refactoring",
				content:
					"This involves restructuring the existing codebase of the legacy system to improve its maintainability, scalability, and performance without changing its external behaviour.",
			},
		],
		outro:
			"Legacy system modernization projects require careful planning, thorough analysis of existing systems, and consideration of future business needs. They often involve collaboration between IT teams, business stakeholders, and external vendors or consultants. Additionally, proper testing, training, and change management are essential to ensure a smooth transition and minimize disruptions to operations.",
	},
	{
		slug: "quality-assurance",
		intro:
			"Quality assurance (QA) is a critical component in software development, ensuring that products meet specified requirements and function reliably. Our QA services help organizations maintain high standards of quality, improve customer satisfaction, and reduce time-to-market by identifying and resolving issues early in the development cycle.",
		features: [
			{
				title: "Functional Testing",
				content:
					"This involves verifying that the software functions according to its requirements. It includes unit testing, integration testing, system testing, and user acceptance testing to ensure each component works as intended.",
			},
			{
				title: "Performance Testing",
				content:
					"Performance testing evaluates the speed, scalability, and stability of an application under various conditions. It helps identify bottlenecks and ensures the system can handle high loads and traffic without degradation.",
			},
			{
				title: "Security Testing",
				content:
					"Security testing aims to uncover vulnerabilities within the software to prevent unauthorized access, data breaches, and other potential threats. It includes penetration testing, vulnerability scanning, and risk assessments.",
			},
			{
				title: "Automation Testing",
				content:
					"By leveraging automated tools, repetitive testing tasks can be executed more efficiently and accurately. Automation testing improves test coverage, reduces manual effort, and accelerates release cycles.",
			},
			{
				title: "Compatibility Testing",
				content:
					"This type of testing ensures that the software performs consistently across different devices, browsers, operating systems, and network environments. It helps in delivering a seamless user experience to all users.",
			},
			{
				title: "Regression Testing",
				content:
					"Regression testing is conducted after updates or bug fixes to confirm that existing functionalities remain unaffected. It ensures that new changes do not introduce unexpected issues into the system.",
			},
		],
		outro:
			"Implementing a robust quality assurance process is essential for delivering reliable and high-performing software. Our QA experts use industry best practices and advanced tools to help organizations minimize defects, enhance user experience, and achieve their business goals. From initial planning to post-launch support, we provide end-to-end QA solutions tailored to your specific needs.",
	},
	{
		slug: "cloud-solutions",
		intro:
			"Embrace the power of the cloud with our scalable and secure cloud solutions. Whether you need cloud migration, infrastructure management, or SaaS development, we’ve got you covered. Our cloud services are designed to help businesses optimize operations, enhance flexibility, and drive innovation while maintaining security and compliance.",
		features: [
			{
				title: "Cloud Migration",
				content:
					"Seamlessly transition your existing applications, data, and workloads to the cloud with minimal disruption. We ensure secure data transfers, optimized architectures, and strategic planning to make your migration efficient and cost-effective.",
			},
			{
				title: "Infrastructure as a Service (IaaS)",
				content:
					"Leverage scalable computing resources such as servers, storage, and networking in the cloud, reducing the need for physical hardware. Our IaaS solutions provide flexibility and control while minimizing capital expenditures.",
			},
			{
				title: "Platform as a Service (PaaS)",
				content:
					"Develop, run, and manage applications without the complexity of maintaining infrastructure. Our PaaS offerings streamline the development process, enabling faster deployment and easier scaling.",
			},
			{
				title: "Software as a Service (SaaS) Development",
				content:
					"We design and develop custom SaaS applications tailored to your business needs. Our solutions focus on scalability, user experience, and seamless integration with existing systems.",
			},
			{
				title: "Cloud Security & Compliance",
				content:
					"Protect your data and applications with robust cloud security measures, including encryption, identity and access management, and compliance with industry standards. Our security-first approach ensures your cloud environment remains resilient against threats.",
			},
			{
				title: "Hybrid & Multi-Cloud Solutions",
				content:
					"Optimize your IT environment by integrating public and private clouds or using multiple cloud providers. Our hybrid and multi-cloud strategies offer greater flexibility, scalability, and risk mitigation.",
			},
			{
				title: "Cloud Monitoring & Management",
				content:
					"Ensure peak performance and reliability with continuous monitoring, proactive issue resolution, and resource optimization. Our managed services include cost management, performance tuning, and automated scaling.",
			},
		],
		outro:
			"Whether you're starting your cloud journey or looking to optimize existing cloud infrastructures, our expert team is here to support you every step of the way. With tailored cloud strategies, cutting-edge technologies, and a focus on security and scalability, we help businesses unlock the full potential of the cloud and achieve their long-term goals.",
	},
];
