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
	backplate?: "dark" | "light";
	cta?: {
		text: string;
		href: string;
	};
	subtitle?: string;
	html?: string;
};

const ImageHero = ({ image, cta, title, subtitle, textSide, backplate, html }: ImageHeroPropsT) => {
	const style_imageSide = !textSide
		? "image-full"
		: textSide === "left"
		? "image-onside image-right"
		: "image-onside image-left";

	const style_backplate = textSide ? "transparent" : backplate || "light";

	return (
		<div
			className={clsx("hero-image", {
				"image-full": !textSide,
			})}
		>
			<Container>
				<div className={clsx("layout", style_imageSide)}>
					<div className="hero-image">
						<Image
							src={image.src}
							alt={image.alt || ""}
							fill={true}
						/>
					</div>
					<div className="hero-text">
						<div className={clsx("backplate", style_backplate)}>
							{title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
							{subtitle && <h3 dangerouslySetInnerHTML={{ __html: subtitle }} />}
							{html && (
								<div
									className="hero-html"
									dangerouslySetInnerHTML={{ __html: html }}
								/>
							)}

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

export default ImageHero;
