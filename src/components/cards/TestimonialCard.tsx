import { type TestimonyData } from "@/data/partners";
import Image from "next/image";

type TestimonialPropsT = TestimonyData;

export default function TestimonialCard({
	testimony,
	name,
	companyName,
	position,
	image,
}: TestimonialPropsT) {
	return (
		<div className="testimonial-card">
			<div className="testimonial-card-layout">
				<div className="testimonial-image">
					<Image
						src={image.src}
						alt={image.alt || name}
						width={200}
						height={200}
					/>
				</div>
				<div className="testimonial-content">
					<p dangerouslySetInnerHTML={{ __html: `&quot;${testimony}&quot;` }} />
					<div className="citation">
						<p className="citation-name">{name}</p>
						<p className="citation-position">{position}</p>
						<p className="citation-company-name">{companyName}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
