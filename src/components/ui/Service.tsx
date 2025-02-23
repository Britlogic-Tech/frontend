import { type ServiceDescription, ServiceCardData } from "@/data/services";
import Article from "@/components/structure/Article";
import LongContent from "@/components/structure/LongContent";
import PageHeader from "./PageHeader";
import Main from "../structure/Main";

const Service = ({
	service: s,
	serviceCard: sc,
}: {
	service: ServiceDescription;
	serviceCard: ServiceCardData;
}) => {
	return (
		<>
			<PageHeader
				title={sc.title}
				subtitle={sc.excerpt}
				referrer="/services"
			/>
			<Main>
				{s.intro && (
					<Article>
						<LongContent>
							<p dangerouslySetInnerHTML={{ __html: s.intro }} />
						</LongContent>
					</Article>
				)}
				{s.features && (
					<div className="flex flex-col gap-6">
						{s.features.map((f) => (
							<Article
								key={f.title}
								className="service-feature"
							>
								<LongContent>
									<div className="service-feature-title">
										<h3>{f.title}</h3>
									</div>
									<div className="service-feature-content">
										<p>{f.content}</p>
									</div>
								</LongContent>
							</Article>
						))}
					</div>
				)}
				{s.outro && (
					<Article className="mt-8">
						<LongContent>
							<div dangerouslySetInnerHTML={{ __html: s.outro }} />
						</LongContent>
					</Article>
				)}
			</Main>
		</>
	);
};

export default Service;
