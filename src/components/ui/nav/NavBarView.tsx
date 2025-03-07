import Link from "next/link";
import Chip from "@/components/cards/Chip";
import { type NavigationData } from "@/data/navigation";

export default function NavBarView({ navgationItemData }: { navgationItemData: NavigationData }) {
	const items = navgationItemData.items!;

	return (
		<>
			<div className="flex gap-4">
				<Link href={navgationItemData.url}>
					<div className="whitespace-nowrap text-lg font-bold text-slate-900 border-r border-solid border-slate-700 h-full pe-4">
						{navgationItemData.title}
					</div>
				</Link>

				<div className="grid gap-4 grid-cols-1 md:grid-cols-2 h-full w-full">
					{items.map((item) => (
						<Link
							key={item.slug}
							href={`${item.href}/${item.slug}`}
						>
							<Chip
								key={item.slug}
								id={item.slug}
								title={item.title}
								isInteractive={true}
							/>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
