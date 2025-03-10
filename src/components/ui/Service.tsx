import { type ServiceDescription } from "@/data/services";
import Article from "@/components/structure/Article";
import LongContent from "@/components/structure/LongContent";
import Highlight from "../cards/Highlight";
import Image from "next/image";

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

function getFeaturesByGroupName(
  s: ServiceDescription,
  group: string
): Features {
  if (!hasGroups(s)) return s.features;
  return s.features!.filter((f) => f.group === group);
}

const Service = ({ service: s }: { service: ServiceDescription }) => {
  return (
    <>
      {s.intro && (
        <Article className="my-8">
          <LongContent>
            {s.image && (
              <div className="w-full rounded-[8px] overflow-hidden mb-8">
                <Image
                  src={s.image.src}
                  alt={s.image.alt || ""}
                  width={s.image.width || 1000}
                  height={s.image.height || 500}
                />
              </div>
            )}
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
        <Highlight>
          <Article>
            <div dangerouslySetInnerHTML={{ __html: s.outro }} />
          </Article>
        </Highlight>
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
        <Article key={f.title} className="service-feature">
          <LongContent>
            <div className="service-feature-title">
              <h2 className="mt-0">{f.title}</h2>
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
