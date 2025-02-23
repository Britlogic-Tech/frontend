import Main from "@/components/structure/Main";
import ServiceCard from "@/components/cards/ServiceCard";
import Chip from "@/components/cards/Chip";
import { servicesCardsData } from "@/data/services";

const Services = () => {
	return (
		<Main>
			<Chip
				id="1"
				title="Services"
				excerpt="We offer a wide range of services to help you grow your business."
				variant="light"
				isInteractive={true}
			/>

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
