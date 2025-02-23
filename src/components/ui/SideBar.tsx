import Link from "next/link";
import clsx from "clsx";

type SideBarPropsT = {
	items: Array<{
		title: string;
		slug: string;
	}>;
	selected?: string;
	className?: string;
	id?: string;
	title?: string;
};

const SideBar = ({ items, id, className = "", title, selected = "" }: SideBarPropsT) => {
	return (
		<div
			id={id}
			className={clsx("container-sidebar", className)}
		>
			{title && <h3>{title}</h3>}
			<div className="container-sidebar-items">
				{items.map((item) => (
					<Link
						key={item.slug}
						href={`/services/${item.slug}`}
					>
						<div
							key={item.slug}
							id={`sidebar-item-${item.slug}`}
							className={clsx("sidebar-item", {
								selected: item.slug === selected,
							})}
						>
							{item.title}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SideBar;
