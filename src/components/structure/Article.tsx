import clsx from "clsx";
type ArticlePropsT = {
	id?: string;
	className?: string;
	children?: React.ReactNode;
};

const Article = ({ id, className, children }: ArticlePropsT) => {
	return (
		<article
			id={id}
			className={clsx("article", className)}
		>
			{children}
		</article>
	);
};

export default Article;
