import Link from "next/link";

type NavBarItemProps = {
	label: string;
	href: string;
	id?: string;
	onClick?: () => void;
	className?: string;
	children?: React.ReactNode;
};

export default function NavBarItem({
	label,
	id,
	href,
	className = "",
	children,
	onClick,
}: NavBarItemProps): JSX.Element {
	const handleOnClick = () => {
		if (typeof onClick === "function") {
			onClick();
		}
	};

	return (
		<Link
			onClick={handleOnClick}
			id={id}
			className={`navbar-item ${className}`.trim()}
			href={href}
		>
			{label}
			{children}
		</Link>
	);
}
