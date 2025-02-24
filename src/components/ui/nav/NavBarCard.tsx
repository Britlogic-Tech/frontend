import clsx from "clsx";
const NavBarCard = ({
	children,
	id,
	className = "",
}: {
	children: React.ReactNode;
	id?: string;
	className?: string;
}) => {
	return (
		<div
			id={id}
			className={clsx("navbar-view-wrapper", className)}
		>
			{children}
		</div>
	);
};

export default NavBarCard;
