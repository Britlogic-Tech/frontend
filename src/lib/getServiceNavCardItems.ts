import { servicesCardsData } from "@/data/services";
import { type NavigationData } from "@/data/navigation";

export function gatNavigationDataItems(): NavigationData["items"] {
	const items = servicesCardsData.reduce((acc, item) => {
		acc!.push({
			title: item.title,
			slug: item.slug,
			href: `/services/`,
		});
		return acc;
	}, [] as NavigationData["items"]);

	return items;
}
