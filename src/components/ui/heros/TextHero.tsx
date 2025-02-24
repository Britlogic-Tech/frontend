import Link from "next/link";
import ButtonLink from "@/components/buttons/ButtonLink";
import Container from "@/components/structure/Container";

type TextHeroPropsT = {
	title: string;
	subtitle: string;
	cta?: {
		text: string;
		href: string;
	};
};

const TextHero = ({ cta, title, subtitle }: TextHeroPropsT) => {
	return (
		<div className="hero-image textual">
			<Container>
				<div className="layout textual">
					<div className="hero-text">
						<div className="backplate transparent">
							<h2 dangerouslySetInnerHTML={{ __html: title }} />
							<h3>{subtitle}</h3>
							{cta && (
								<Link href={cta.href}>
									<ButtonLink label={cta.text || "Click here"} />
								</Link>
							)}
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default TextHero;
