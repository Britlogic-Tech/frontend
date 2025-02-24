import type { ImageT } from "@/types/image";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/buttons/ButtonLink";

type ServcieCardPropsT = {
	id: string;
	image: ImageT;
	title: string;
	excerpt: string;
	cta?: { label: string; href: string };
	isCardInteravtive?: boolean;
};

const ServiceCard = ({ id, image, cta, title, excerpt, isCardInteravtive }: ServcieCardPropsT) => {
	const imgSizes = { w: 300, h: 195 };

	return (
		<div
			id={id}
			className={`service-card ${isCardInteravtive ? "interactive" : ""}`}
		>
			<div className="service-card-layout">
				<div className="service-card-image">
					<Image
						src={image.src}
						alt={image.alt || title || ""}
						width={imgSizes.w}
						height={imgSizes.h}
					/>
				</div>
				<div className={`service-card-content ${cta ? "has-cta" : ""}`}>
					<h3>{title}</h3>
					<p>{excerpt}</p>
				</div>
				{cta && (
					<Link
						className="card-cta"
						href={cta.href}
						title={cta.label}
					>
						<Button
							label={cta.label}
							iconName="ChevronRight"
							iconPosition="right"
						/>
					</Link>
				)}
			</div>
		</div>
	);
};

export default ServiceCard;
