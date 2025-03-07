const Article = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <article className={className}>{children}</article>;
};

export default Article;
