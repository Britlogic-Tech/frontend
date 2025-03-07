import Main from "@/components/structure/Main";
import ServiceCard from "@/components/cards/ServiceCard";
import { servicesCardsData } from "@/data/services";

const Services = ({ id, className = "" }: { id?: string; className?: string }) => {
	return (
		<Main id={id}>
			<div className={`grid-wrapper ${className}`.trim()}>
				{servicesCardsData.map((card) => (
					<ServiceCard
						key={card.id}
						{...card}
					/>
				))}
			</div>
		</Main>
	);
};

export default Services;
