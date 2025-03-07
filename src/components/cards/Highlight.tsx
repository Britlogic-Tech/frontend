type HighlightPropsT = {
	title?: string;
	children: React.ReactNode;
	className?: string;
};

const Highlight = ({ title, children, className = "" }: HighlightPropsT) => {
	return (
		<div className={`highlight ${className}`}>
			{title && <h2>{title}</h2>}
			<div>{children}</div>
		</div>
	);
};

export default Highlight;
