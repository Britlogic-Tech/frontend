import Container from "@/components/structure/Container";
import clsx from "clsx";

type GeneralHeroPropsT = {
	title: string;
	className?: string;
	children?: React.ReactNode;
};

const GeneralHero = ({ title, className, children }: GeneralHeroPropsT) => {
	return (
		<div className={clsx("hero-image", "textual", className)}>
			<Container>
				<div className="layout textual">
					<div className="hero-text">
						<div className="backplate transparent">
							<h2 dangerouslySetInnerHTML={{ __html: title }} />
							{children}
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default GeneralHero;
