"use client";
import Link from "next/link";
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
						<Link
							href="/"
							title="BritLogic Home"
						>
							<Logo
								type="full"
								width={150}
								variant="colour"
							/>
						</Link>
					</div>
					<div className="nav-bar-navmenu">{children}</div>
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
