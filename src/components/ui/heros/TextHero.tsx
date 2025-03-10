import Link from "next/link";
import ButtonLink from "@/components/buttons/ButtonLink";
import Container from "@/components/structure/Container";
import clsx from "clsx";

type TextHeroPropsT = {
	title: string;
	subtitle?: string;
	cta?: {
		text: string;
		href: string;
	};
	children?: React.ReactNode;
	className?: string;
};

const TextHero = ({ cta, title, subtitle, children, className }: TextHeroPropsT) => {
	return (
		<div className={clsx("hero-general", "textual", className)}>
			<Container>
				<div className="hero-layout textual">
					<div className="hero-text">
						<div className="backplate transparent">
							<h2 dangerouslySetInnerHTML={{ __html: title }} />
							{subtitle && <h3>{subtitle}</h3>}
							{children && children}
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
