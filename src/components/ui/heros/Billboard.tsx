import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/buttons/ButtonLink";
import Container from "@/components/structure/Container";
import { type ImageT } from "@/types/image";
import clsx from "clsx";

type ImageHeroPropsT = {
	image: ImageT;
	title: string;
	textSide?: "left" | "right";
	backplate?: "dark" | "light" | "transparent";
	cta?: {
		text: string;
		href: string;
	};
	subtitle?: string;
	className?: string;
} & ({ html?: string; children?: never } | { html?: never; children?: React.ReactNode });

const ImageHero = ({
	image,
	cta,
	title,
	subtitle,
	children,
	backplate = "transparent",
}: ImageHeroPropsT) => {
	return (
		<div className="billboard">
			<div className="billboard-layout">
				<div className="billboard-image">
					<Image
						src={image.src}
						alt={image.alt || ""}
						fill={true}
					/>

					<Container>
						<div className="billboard-text">
							<div className={clsx("billboard-backplate", backplate)}>
								{subtitle && <h3 dangerouslySetInnerHTML={{ __html: subtitle }} />}
								{title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
								{children && <div className="hero-html">{children}</div>}
								{cta && (
									<Link href={cta.href}>
										<ButtonLink label={cta.text || "Click here"} />
									</Link>
								)}
							</div>
						</div>
					</Container>
				</div>
			</div>
		</div>
	);
};

export default ImageHero;
