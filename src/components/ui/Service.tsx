import { type ServiceDescription } from "@/data/services";
import Article from "@/components/structure/Article";
import LongContent from "@/components/structure/LongContent";

const Service = ({ service: s }: { service: ServiceDescription }) => {
	return (
		<>
			{s.intro && (
				<Article className="my-8">
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
				<Article className="my-8">
					<LongContent>
						<div dangerouslySetInnerHTML={{ __html: s.outro }} />
					</LongContent>
				</Article>
			)}
		</>
	);
};

export default Service;
