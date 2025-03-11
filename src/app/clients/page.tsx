import Main from "@/components/structure/Main";
import ContainerLongText from "@/components/structure/ContainerLongText";
import ImageHero from "@/components/ui/heros/ImageHero";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonies } from "@/data/partners";
import Image from "next/image";

export default function Page() {
	return (
		<>
			<Main className="mb-12">
				<ContainerLongText>
					<p>
						With over 12 years of experience in developing software applications, our client has
						become a trusted name across various industries. Their journey has been marked by a
						commitment to innovation, quality, and customer satisfaction. Specializing in creating
						custom software solutions, they have successfully catered to the unique demands of
						sectors including healthcare, finance, retail, and more.
					</p>
					{testimonies && testimonies[0] && <TestimonialCard {...testimonies[0]} />}
					<p>
						Our client&apos;s team of expert developers excels in leveraging the latest technologies
						to build robust, scalable, and user-friendly applications. They take pride in their
						ability to transform complex requirements into intuitive and efficient software that
						drives business success. Their services range from mobile and web application
						development to enterprise software solutions, ensuring comprehensive support for their
						clients&apos; digital transformation needs.
					</p>
				</ContainerLongText>
			</Main>

			<ImageHero
				image={{
					src: "https://britlogic.com/wp-content/uploads/2024/05/why-chose-lft-img-org.jpg",
					alt: "why choose britlogic - a group of happy clients celebrate success anbd growth",
				}}
				textSide="right"
				title="Affordable & flexi plans for startups"
				cta={{
					text: "Let's Talk",
					href: "/contact",
				}}
			>
				<div>
					Absolutely! When it comes to launching a startup, affordability and flexibility are
					paramount. Here are some key considerations for affordable and flexible plans:
					<ul>
						<li>Lean Operations</li>
						<li>Bootstrapping</li>
						<li>Flexible Work Arrangements</li>
						<li>Subscription-Based Services</li>
					</ul>
				</div>
			</ImageHero>
			<Main>
				<ContainerLongText>
					<p className="pt-4">
						At the heart of their approach is a dedication to understanding each client&apos;s
						specific challenges and goals, enabling them to deliver tailored solutions that not only
						meet but exceed expectations. Their proven track record of delivering projects on time
						and within budget has earned them a reputation for reliability and excellence in the
						software development industry.
					</p>
					{testimonies && testimonies[1] && <TestimonialCard {...testimonies[1]} />}
					<div className="w-full m-auto lg:max-w-[450px]">
						<Image
							src="/images/partners/partners.png"
							alt="Our Partners"
							width={900}
							height={900}
						/>
					</div>
					<p>
						Whether you need to streamline operations, enhance customer engagement, or innovate your
						business processes, our client is equipped with the expertise and experience to turn
						your vision into reality.
					</p>
				</ContainerLongText>
			</Main>
		</>
	);
}
