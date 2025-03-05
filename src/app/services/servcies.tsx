import Main from "@/components/structure/Main";
import ServiceCard from "@/components/cards/ServiceCard";
import { servicesCardsData } from "@/data/services";

const Services = () => {
	return (
		<Main>
			<div className="grid-wrapper">
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
