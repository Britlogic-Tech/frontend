import Image from "next/image";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import { type ImageT } from "@/types/image";
import clsx from "clsx";

type ImageHeroPropsT = {
	image: ImageT;
	title: string;
	subtitle: string;
	textSide: "left" | "right";
	cta?: {
		text: string;
		href: string;
	};
};

const ImageHero = ({ image, title, subtitle, textSide }: ImageHeroPropsT) => {
	return (
		<div className={clsx("hero-image", textSide)}>
			<div className="hero-image__text">
				<h1>{title}</h1>
				<p>{subtitle}</p>
			</div>
			<Image
				src={image.src}
				alt={image.alt || ""}
				sizes="100vw"
				fill={true}
			/>
		</div>
	);
};

export default ImageHero;
