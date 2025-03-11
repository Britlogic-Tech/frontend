import PageHeader from "@/components/ui/PageHeader";
import Main from "@/components/structure/Main";
import ContainerLongText from "@/components/structure/ContainerLongText";
import { Section, SubSection, Article } from "@/components/structure/core";
import Highlight from "@/components/cards/Highlight";

export default function page() {
	return (
		<>
			<PageHeader
				title={"About BritLogic Technologies"}
				subtitle={"We are a team of professionals with a passion for technology."}
				referrer="/"
			/>

			<Main className="lg:mb-12 min-h-dvh">
				<ContainerLongText>
					<Section>
						<Article>
							<h2>About BritLogic</h2>
							<p>
								Having over <strong>12 years of experience</strong> developing software applications
								for various industries, BritLogic has become a trusted name in delivering
								<em>innovative and tailored solutions</em> to clients across the globe. Our team of
								dedicated experts, based in both the <strong>UK</strong> and <strong>India</strong>,
								brings together the best skills and knowledge to create cutting-edge software
								products that empower businesses to thrive.
							</p>
						</Article>
						<Article>
							<h2>Our Mission is to help businesses harness the power of technology</h2>
							<p>
								At BritLogic, our mission is to help businesses harness the power of technology to
								drive <strong>growth</strong>, <strong>efficiency</strong>, and{" "}
								<strong>success</strong>. We believe in working <em>collaboratively</em> with our
								clients to develop solutions that are not only innovative but also practical and
								aligned with their business goals.
							</p>
						</Article>

						<Highlight title="Our Vision">
							<p>
								To be the <strong>leading provider</strong> of software development services that
								enable businesses to <strong>transform</strong> and <strong>succeed</strong> in the
								digital age.
							</p>
						</Highlight>

						<Article>
							<h2>Our Approach</h2>
							<SubSection>
								<h3>Agile Methodology</h3>
								<p>
									We follow <strong>AGILE methodologies</strong> to ensure continuous improvement
									and adaptability in our development process. This approach allows us to be
									flexible and responsive to changes, ensuring that we deliver value at every stage
									of the project.
								</p>
							</SubSection>
							<SubSection>
								<h3>Test-Driven Development (TDD)</h3>
								<p>
									<strong>Test-Driven Development (TDD)</strong> lies at the core of our development
									practices. By writing tests before code, we ensure that our products are{" "}
									<em>robust</em>, <em>high-quality</em>, and <em>maintainable</em>, reducing the
									chances of errors and improving overall efficiency.
								</p>
							</SubSection>
							<SubSection>
								<h3>Continuous Learning and Innovation</h3>
								<p>
									We are a team of <em>passionate technologists</em> who thrive on new challenges
									and opportunities to grow and learn. Staying up-to-date with the latest
									technologies and industry trends allows us to push boundaries and deliver
									cutting-edge solutions to our clients.
								</p>
							</SubSection>
						</Article>

						<Article>
							<h2>Our Global Presence</h2>
							<p>
								With teams strategically located in the <strong>United Kingdom</strong> and{" "}
								<strong>India</strong>, we bring together diverse perspectives and expertise to
								deliver comprehensive solutions. This global presence enables us to serve clients
								across different markets while maintaining a high standard of service.
							</p>
						</Article>

						<Highlight title="Why Choose BritLogic?">
							<ul>
								<li>
									<strong>Over 12 years of industry experience</strong>
								</li>
								<li>
									<strong>Expertise in the latest technologies and methodologies</strong>
								</li>
								<li>
									<strong>Agile-driven development process</strong>
								</li>
								<li>
									<strong>Commitment to quality through Test-Driven Development (TDD)</strong>
								</li>
								<li>
									<strong>Collaborative approach focused on client success</strong>
								</li>
								<li>
									<strong>Global team providing around-the-clock support</strong>
								</li>
							</ul>
						</Highlight>

						<Article>
							<h2>Let’s Build Something Great Together</h2>
							<p>
								If you’re looking for a partner who can transform your ideas into <em>reliable</em>,{" "}
								<em>scalable</em>, and <em>innovative</em> software solutions,{" "}
								<strong>BritLogic</strong> is here to help. <u>Contact us today</u> to start your
								next project!
							</p>
						</Article>
					</Section>
				</ContainerLongText>
			</Main>
		</>
	);
}
