import Logo from "@/components/ui/Logo";
import FooterCompanyInfo from "./FooterCompanyInfo";

const FooterAbout = () => {
	return (
		<div>
			<Logo
				type="short"
				variant="mono"
				height={60}
			/>
			<p className="mt-4">
				With over 12 years of experience in developing software applications across various
				industries, our UK and India-based team of experts leverage the latest technology to deliver
				top-notch products and services to our customers.
			</p>
			<FooterCompanyInfo />
		</div>
	);
};

export default FooterAbout;
