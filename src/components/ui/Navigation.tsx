import { navigationData } from "@/data/navigation";
import NavBarCard from "@/components/ui/nav/NavBarCard";
import NavBarView from "./nav/NavBarView";

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
							{item.viewName && item.items && (
								<>
									<NavigationMenuTrigger className="item">{item.title}</NavigationMenuTrigger>
									<NavigationMenuContent>
										<NavBarCard>
											<NavBarView navgationItemData={item} />
										</NavBarCard>
									</NavigationMenuContent>
								</>
							)}
							{!item.viewName && (
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
