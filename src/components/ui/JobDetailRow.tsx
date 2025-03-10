export default function JobDetailRow({
	icon,
	children,
}: {
	icon?: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<div className="icon-row">
			{icon && <span className="row-icon">{icon}</span>}
			<span>{children}</span>
		</div>
	);
}
