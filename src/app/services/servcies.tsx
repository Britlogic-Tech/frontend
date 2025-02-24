import Main from "@/components/structure/Main";
import ServiceCard from "@/components/cards/ServiceCard";
import { servicesCardsData } from "@/data/services";

const Services = () => {
	return (
		<Main>
			<div className="flex flex-wrap gap-8 m-20">
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
