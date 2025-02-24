import { type ServiceDescription } from "@/data/services";
import Article from "@/components/structure/Article";
import LongContent from "@/components/structure/LongContent";

type Features = ServiceDescription["features"];

function hasGroups(s: ServiceDescription): boolean {
	if (!s.features) return false;
	return s.features.some((f) => f.group);
}

function getGroups(s: ServiceDescription): Array<string> {
	if (!hasGroups(s)) return [];
	const groups = new Set<string>();
	s.features!.forEach((f) => {
		if (!f.group) return;
		groups.add(f.group);
	});
	return Array.from(groups);
}

function getFeaturesByGroupName(s: ServiceDescription, group: string): Features {
	if (!hasGroups(s)) return s.features;
	return s.features!.filter((f) => f.group === group);
}

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
			{s.features && !hasGroups(s) && <PrintFeatures features={s.features} />}

			{s.features && hasGroups(s) && (
				<div className="flex flex-col gap-6">
					{getGroups(s).map((group) => (
						<div key={group}>
							<h4 className="pb-4">{group}</h4>
							<PrintFeatures features={getFeaturesByGroupName(s, group)} />
						</div>
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

function PrintFeatures({ features }: { features: Features }) {
	if (!features) return null;
	return (
		<div className="flex flex-col gap-6">
			{features.map((f) => (
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
	);
}
