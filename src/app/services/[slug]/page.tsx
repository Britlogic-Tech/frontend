import { servicesCardsData, services } from "@/data/services";
import Service from "@/components/ui/Service";
import PageHeader from "@/components/ui/PageHeader";
import ContainerWithSidebar from "@/components/structure/ContainerWithSidebar";
import Main from "@/components/structure/Main";
import SideBar from "@/components/ui/SideBar";
import getDataBySlug from "@/lib/getDataBySlug";

type ParamsT = Promise<{ slug: string }>;

export default async function page({ params }: { params: ParamsT }) {
	const { slug } = await params;
	if (!slug) return <div>Not found</div>;

	const service = getDataBySlug(services, slug);
	const serviceCard = getDataBySlug(servicesCardsData, slug);

	if (!service || !serviceCard) return <div>Bad slug! {slug}</div>;

	return (
		<>
			<PageHeader
				title={serviceCard.title}
				subtitle={serviceCard.excerpt}
				referrer="/services"
			/>
			<Main className="mb-12">
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
