import Container from "./Container";
import FooterContent from "../ui/FooterContent";
const Footer = ({ children }: { children?: React.ReactNode }) => {
	return (
		<footer>
			<Container>
				<FooterContent />
				{children}
			</Container>
		</footer>
	);
};

export default Footer;
