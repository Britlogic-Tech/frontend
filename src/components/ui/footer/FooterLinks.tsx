import Link from "next/link";
import { footerLinks } from "@/data/footerLinks";

const FooterLinks = () => {
	return footerLinks.map((segment) => {
		return (
			<div key={segment.title}>
				<h4>{segment.title}</h4>
				{segment.links.map((link) => {
					return (
						<div key={segment.title + link.title}>
							<Link href={link.href}>{link.title}</Link>
						</div>
					);
				})}
			</div>
		);
	});
};

export default FooterLinks;
