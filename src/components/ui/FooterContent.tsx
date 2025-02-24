import FooterOffices from "./footer/FooterOffices";
import FooterLinks from "./footer/FooterLinks";
import FooterAbout from "./footer/FooterAbout";
import FooterClaims from "./footer/FooterClaims";

const FooterContent = () => {
	return (
		<div>
			<div className="footer-layout">
				<div className="footer-part large ">
					<FooterAbout />
				</div>
				<div className="footer-part">
					<h4>Offices</h4>
					<div className="flex flex-col gap-2">
						<FooterOffices />
					</div>
				</div>
				<div className="footer-part">
					<div className="flex flex-col gap-2">
						<FooterLinks />
					</div>
				</div>
				<div className="footer-part">
					<h4>Offices</h4>
					<div className="flex flex-col gap-2">
						<FooterOffices />
					</div>
				</div>
			</div>
			<FooterClaims />
		</div>
	);
};

export default FooterContent;
