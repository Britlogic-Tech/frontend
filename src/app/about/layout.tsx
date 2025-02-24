import PageHeader from "@/components/ui/PageHeader";
import Main from "@/components/structure/Main";
import ContainerLongText from "@/components/structure/ContainerLongText";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<PageHeader
				title={"About BritLogic Technologies"}
				subtitle={"We are a team of professionals with a passion for technology."}
				referrer="/"
			/>
			<Main className="mb-12">
				<ContainerLongText className="min-h-dvh">{children}</ContainerLongText>
			</Main>
		</>
	);
}
