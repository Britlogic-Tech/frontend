type LongContentProps = {
	id?: string;
	className?: string;
	children: React.ReactNode;
};

const LongContent = ({ id, className = "", children }: LongContentProps) => {
	return (
		<div
			id={id}
			className={`max-w-3xl ${className}`.trim()}
		>
			{children}
		</div>
	);
};

export default LongContent;
