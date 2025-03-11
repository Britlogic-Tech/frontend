export default function Badge({
	children,
	variant,
}: {
	children: React.ReactNode;
	variant: "primary" | "secondary";
}) {
	return <span className={`badge badge-${variant}`}>{children}</span>;
}
