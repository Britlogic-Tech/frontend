"use client";

import { useState } from "react";
import { navigationData } from "@/data/navigation";
import NavBarItem from "./NavBarItem";
import HamburgerMenu from "./HamburgerMenu";
import Button from "@/components/buttons/Button";
import Link from "next/link";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleCloseMenu = () => {
		setIsOpen(false);
	};

	return (
		<>
			<div className="navbar-items-wrapper-wide">
				{navigationData.map((navItem) => (
					<NavBarItem
						key={navItem.title + navItem.url}
						label={navItem.title}
						href={navItem.url}
					/>
				))}
			</div>
			<div
				className="hamburger-menu"
				onClick={handleMenuToggle}
			>
				<HamburgerMenu isOpen={isOpen} />
			</div>
			<div className={`narrow-nav-bar ${isOpen ? "active" : ""}`.trim()}>
				<div className="navbar-items-wrapper-narrow">
					{navigationData.map((navItem) => (
						<NavBarItem
							onClick={handleCloseMenu}
							key={navItem.title + navItem.url}
							label={navItem.title}
							href={navItem.url}
						/>
					))}
					<Link
						className=" mt-4"
						href="/contact"
					>
						<Button
							onClick={handleCloseMenu}
							className="navbar-item"
							iconName="ChevronRight"
							iconPosition="right"
							variant="primary"
							label="Contact Us"
						/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navigation;
