type HighlightPropsT = {
	title: string;
	children: React.ReactNode;
	className?: string;
};

const Highlight = ({ title, children, className = "" }: HighlightPropsT) => {
	return (
		<div className={`highlight ${className}`}>
			<h2>{title}</h2> {children}
		</div>
	);
};

export default Highlight;
