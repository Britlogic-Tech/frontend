import Main from "@/components/structure/Main";
import Services from "@/app/services/Services";
import ImageHero from "@/components/ui/heros/ImageHero";
import Billboard from "@/components/ui/heros/Billboard";
import TextHero from "@/components/ui/heros/TextHero";
import CitationHero from "@/components/ui/heros/CitationHero";
import Section from "@/components/structure/Section";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
	return (
		<>
			<Billboard
				image={{
					src: "/images/hero_001.jpg",
					alt: "hero full image",
				}}
				subtitle="Welcome to Britlogic"
				title="Where innovation<br>meets expertise!"
			/>

			<Main>
				<CitationHero
					subtitle="We are what we repeatedly do:<br/><b>Excellence!</b><br/>Then, is not an act, but a habit."
					cta={{
						text: "Explore what we do",
						href: "/services",
					}}
				>
					<p>
						We specialise in crating cutting-edge software solutions tailored to your unique
						business needs, helping you acceerate your business towards success. Whether you’re
						startup, a small business or a large enterprise,we&apos;re here to help you thrive in
						the ever-evolving technological landscape.
					</p>
				</CitationHero>
			</Main>
			<Section>
				<Services />
			</Section>

			<ImageHero
				image={{
					src: "/images/why-chose-lft-img-org.jpg",
					alt: "Affordable & flexi plans - a group of happy clients celebrate success anbd growth",
				}}
				textSide="right"
				title="Affordable & flexi plans for startups"
				cta={{
					text: "hero cta",
					href: "/",
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

			<ImageHero
				className="!bg-gray-200"
				image={{
					src: "/images/business-support-services.png",
					alt: "why choose britlogic - a group of happy clients celebrate success anbd growth",
				}}
				textSide="left"
				title="Why choose BritLogic?"
				cta={{
					text: "More about us",
					href: "/about",
				}}
			>
				<div>
					<ul>
						<li>
							<b>Expertise:</b> With years of experience in the industry, our team possesses a deep
							understanding of not only the latest technologies but also the technical know-how to
							tackle even the most complex software challenges
						</li>{" "}
						<li>
							<b>Customization:</b> We understand that every business is different. That&apos;s why
							we take a personalized approach to every project, crafting bespoke solutions that
							address your specific challenges and goals.
						</li>
						<li>
							<b>Quality Assurance:</b> Our commitment to quality is non-negotiable. We adhere to
							industry best practices and rigorous testing standards to ensure that our solutions
							are robust, reliable, and scalable.
						</li>
						<li>
							<b>Innovation:</b> Innovation is at the heart of everything we do. We stay abreast of
							the latest technologies and trends to ensure that your software solutions are not just
							up-to-date but also future-proof.
						</li>
						<li>
							<b>Collaboration:</b> We work closely with you every step of the way, from initial
							concept to final delivery, to ensure that your vision is realized and your objectives
							are met. We believe in fostering long-term partnerships built on trust, transparency,
							and mutual respect
						</li>
						<li>
							<b>Customer Satisfaction:</b> Your satisfaction is our ultimate measure of success. We
							are committed to delivering exceptional service and support every step of the way.
						</li>
					</ul>
				</div>
			</ImageHero>

			<TextHero title="A few of our amazing clients">
				<Link
					className="w-full xl:max-w-[450px]"
					href="/clients"
				>
					<Image
						src="/images/partners/partners.png"
						alt="Our Partners"
						width={900}
						height={900}
					/>
				</Link>
			</TextHero>
		</>
	);
};

export default Home;
