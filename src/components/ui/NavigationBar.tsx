"use client";
import Container from "@/components/structure/Container";
import Logo from "@/components/ui/Logo";
import Button from "@/components/buttons/Button";
type NavbarPropsT = {
	className?: string;
	id?: string;
	children: React.ReactNode;
};

const NavigationBar = ({ className, id, children }: NavbarPropsT) => {
	return (
		<nav
			id={id}
			className={`nav-bar-masthead`}
		>
			<Container>
				<div className={`nav-bar ${className}`.trim()}>
					<div className="nav-bar-logo">
						<Logo />
					</div>
					<div className="nav-bar-navmenu">
						{children}
						navigation menu - navigation items btn:in touch{" "}
					</div>
					<div className="nav-bar-cta">
						<Button
							label={"Get in touch"}
							onClick={() => {}}
						/>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default NavigationBar;
