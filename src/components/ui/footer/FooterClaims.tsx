import { rights } from "@/data/companyInfo";

const FooterClaims = () => {
	if (!rights || !rights.claim || !rights.disclaimer) return null;
	return (
		<div className="footer-rights">
			{rights.claim && <p className="footer-claim">{rights.claim}</p>}
			{rights.disclaimer && <p className="footer-disclaim">{rights.disclaimer}</p>}
		</div>
	);
};

export default FooterClaims;
