const SubSection = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <section className={`subsection ${className}`}>{children}</section>;
};

export default SubSection;
