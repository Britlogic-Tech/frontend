import PageHeader from "@/components/ui/PageHeader";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<PageHeader
				title={"BritLogic Technology Clients"}
				subtitle={"We are a team of professionals with a passion for technology."}
				referrer="/"
			/>
			<div className="">{children}</div>
		</>
	);
}
