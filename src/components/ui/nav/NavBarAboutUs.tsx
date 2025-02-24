import Link from "next/link";
import Chip from "@/components/cards/Chip";

const items = [
	{
		title: "About BritLogic",
		slug: "about-us",
		href: "/services",
	},
	{
		title: "Contact BritLogic",
		slug: "contact-us",
		href: "/services",
	},
	{
		title: "Join our team",
		slug: "career",
		href: "/contact",
	},
];

export default function NavServices() {
	return (
		<>
			<div className="flex gap-4">
				<Link href={"/services"}>
					<div className="whitespace-nowrap text-lg font-bold text-slate-900 border-r border-solid border-slate-700 h-full pe-4">
						About us
					</div>
				</Link>

				<div className="grid gap-4 grid-cols-1 md:grid-cols-2 h-full w-full">
					{items.map((item) => (
						<Link
							key={item.slug}
							href={`/services/${item.slug}`}
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
