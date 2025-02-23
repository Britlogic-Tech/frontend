import Container from "./Container";
type MainProps = {
	id?: string;
	className?: string;
	children: React.ReactNode;
};

const Main = ({ id, className, children }: MainProps) => {
	return (
		<main
			id={id}
			className={className}
		>
			<Container>{children}</Container>
		</main>
	);
};

export default Main;
