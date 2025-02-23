import { servicesCardsData, services } from "@/data/services";
import Service from "@/components/ui/Service";
import PageHeader from "@/components/ui/PageHeader";
import ContainerWithSidebar from "@/components/structure/ContainerWithSidebar";
import Main from "@/components/structure/Main";
import SideBar from "@/components/ui/SideBar";

type ParamsT = Promise<{ slug: string }>;

export default async function page({ params }: { params: ParamsT }) {
	const { slug } = await params;
	console.log("PARAM-->", slug);
	if (!slug) return <div>Not found</div>;

	function serviceFinder<T extends { slug: string }>(set: Array<T>, slug: string): T | undefined {
		return set.find((s) => slug === s.slug);
	}

	const service = serviceFinder(services, slug);
	const serviceCard = serviceFinder(servicesCardsData, slug);

	if (!service || !serviceCard) return <div>Bad slug! {slug}</div>;

	return (
		<>
			<PageHeader
				title={serviceCard.title}
				subtitle={serviceCard.excerpt}
				referrer="/services"
			/>
			<Main>
				<ContainerWithSidebar
					sidebar={
						<SideBar
							title="Our services"
							items={servicesCardsData}
							selected={serviceCard.slug}
						/>
					}
					content={<Service service={service} />}
				></ContainerWithSidebar>
			</Main>
		</>
	);
}
