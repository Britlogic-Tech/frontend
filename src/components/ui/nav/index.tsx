import NavAboutUs from "./NavBarAboutUs";
import NavServices from "./NavBarServices";

export type NavViewT = "NavBarAboutUs" | "NavBarServices";

const NavView = ({ view }: { view: NavViewT }) => {
	switch (view) {
		case "NavBarAboutUs":
			return <NavAboutUs />;
		case "NavBarServices":
			return <NavServices />;
		default:
			return null;
	}
};

export default NavView;
