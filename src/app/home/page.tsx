import Main from "@/components/structure/Main";
import Services from "@/app/services/servcies";
import ImageHero from "@/components/ui/heros/ImageHero";
import TextHero from "@/components/ui/heros/TextHero";
import CitationHero from "@/components/ui/heros/CitationHero";

const Home = () => {
	return (
		<>
			<TextHero
				title="Where innovation<br>meets expertise!"
				subtitle="hero subtitle"
				cta={{
					text: "hero cta",
					href: "/",
				}}
			/>

			<Main>
				<CitationHero
					subtitle="We are what we repeatedly do:<br/><b>Excellence!</b><br/>Then, is not an act, but a habit."
					html={`We specialise in crating cutting-edge software solutions tailored to your unique business needs, helping you acceerate your business towards success.
					Whether you’re startup, a small business or a large enterprise,we’re here to help you thrive in the ever-evolving technological landscape.`}
					cta={{
						text: "Explore what we do",
						href: "/services",
					}}
				/>
				<Services />
			</Main>

			<ImageHero
				image={{
					src: "https://britlogic.com/wp-content/uploads/2024/05/why-chose-lft-img-org.jpg",
					alt: "why choose britlogic - a group of happy clients celebrate success anbd growth",
				}}
				textSide="right"
				title="Affordable & flexi plans for startups"
				html={`Absolutely! When it comes to launching a startup, affordability and flexibility are paramount. Here are some key considerations for affordable and flexible plans:
				<ul>
					<li>Lean Operations</li>
					<li>Bootstrapping</li>
					<li>Flexible Work Arrangements</li>
					<li>Subscription-Based Services</li>
				</ul>`}
				cta={{
					text: "hero cta",
					href: "/",
				}}
			/>
		</>
	);
};

export default Home;
