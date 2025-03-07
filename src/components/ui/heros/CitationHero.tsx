import Link from "next/link";
import ButtonLink from "@/components/buttons/ButtonLink";

type CitationHeroPropsT = {
	title?: string;
	subtitle?: string;
	html?: string;
	className?: string;
	cta?: {
		text: string;
		href: string;
	};
	children?: React.ReactNode;
};

const CitationHero = ({
	cta,
	title,
	subtitle,
	html,
	className = "",
	children = null,
}: CitationHeroPropsT) => {
	return (
		<div className={`hero-citation ${className}`.trim()}>
			<div className="hero-text">
				<div className="backplate">
					{title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
					{subtitle && <h3 dangerouslySetInnerHTML={{ __html: subtitle }} />}
					{html && (
						<div
							className="hero-html"
							dangerouslySetInnerHTML={{ __html: html }}
						/>
					)}
					{children}
					{cta && (
						<Link href={cta.href}>
							<ButtonLink label={cta.text || "Click here"} />
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default CitationHero;
