type ContainerProps = {
	id?: string;
	className?: string;
	children: React.ReactNode;
};

const Container = ({ id, className, children }: ContainerProps) => {
	return (
		<div
			id={id}
			className={`container ${className}`.trim()}
		>
			{children}
		</div>
	);
};

export default Container;
