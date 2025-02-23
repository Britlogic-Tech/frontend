"use client";
import type { ImageT } from "@/types/image";
import Image from "next/image";
import Button from "@/components/buttons/Button";

type ServcieCardPropsT = {
	id: string;
	image: ImageT;
	title: string;
	excerpt: string;
	actionLabel?: string;
	onClick?: () => void;
};

const ServiceCard = ({ id, image, actionLabel, title, excerpt, onClick }: ServcieCardPropsT) => {
	const imgSizes = { w: 300, h: 195 };
	const handleClick = () => {
		if (onClick) onClick();
	};

	return (
		<div
			id={id}
			className="service-card"
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
				<div className="service-card-content">
					<h3>{title}</h3>
					<p>{excerpt}</p>
					{actionLabel && (
						<Button
							label={actionLabel}
							onClick={handleClick}
							iconName="ChevronRight"
							iconPosition="right"
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
