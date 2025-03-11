import Icons from "@/components/icons";

const { Hamburger, Close } = Icons;
const color = "#003566";
const size = 24;
export default function HamburgerMenu({ isOpen = false }: { isOpen: boolean }): JSX.Element {
	return isOpen ? (
		<Close
			size={size}
			fill={color}
		/>
	) : (
		<Hamburger
			size={size}
			fill={color}
		/>
	);
}
