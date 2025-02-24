import LongContent from "./LongContent";
type ContainerLongTextProps = {
	id?: string;
	className?: string;
	children: React.ReactNode;
};

const ContainerLongText = ({ id, className = "", children }: ContainerLongTextProps) => {
	return (
		<div
			id={id}
			className={`container-text-pages ${className}`.trim()}
		>
			<LongContent>{children}</LongContent>
		</div>
	);
};

export default ContainerLongText;
