import Link from "next/link";
import Chip from "@/components/cards/Chip";
import { servicesCardsData } from "@/data/services";

export default function NavServices() {
	return (
		<>
			<div className="flex gap-4">
				<Link href={"/services"}>
					<div className="text-lg font-bold text-slate-900 border-r border-solid border-slate-700 h-full pe-4">
						Services
					</div>
				</Link>

				<div className="grid gap-4 grid-cols-1 md:grid-cols-2 h-full w-full">
					{servicesCardsData.map((service) => (
						<Link
							key={service.slug}
							href={`/services/${service.slug}`}
						>
							<Chip
								key={service.slug}
								id={service.slug}
								title={service.title}
								isInteractive={true}
							/>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
