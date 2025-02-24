import type { NavViewT } from "./nav";
import { navigationData } from "@/data/navigation";
import NavBarCard from "@/components/ui/nav/NavBarCard";

import NavView from "./nav";

import {
	NavigationMenu,
	NavigationMenuContent,
	// NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	// NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const navigation = () => {
	return (
		<div>
			<NavigationMenu>
				<NavigationMenuList>
					{navigationData.map((item) => (
						<NavigationMenuItem key={item.title}>
							{item.view && (
								<>
									<NavigationMenuTrigger className="item">{item.title}</NavigationMenuTrigger>
									<NavigationMenuContent>
										<NavBarCard>
											<NavView view={item.view as NavViewT} />
										</NavBarCard>
									</NavigationMenuContent>
								</>
							)}
							{!item.view && (
								<NavigationMenuLink
									className="item px-4 py-2"
									href={item.url}
								>
									{item.title}
								</NavigationMenuLink>
							)}
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};

export default navigation;
