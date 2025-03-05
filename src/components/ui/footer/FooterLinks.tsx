import Link from "next/link";
import { footerLinks } from "@/data/footerLinks";

type FooterLinkProps = { includedParts?: string[] };

const FooterLinks = ({ includedParts }: FooterLinkProps) => {
	return footerLinks.map((segment) => {
		if (includedParts && !includedParts.includes(segment.title.toLowerCase())) return null;
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
