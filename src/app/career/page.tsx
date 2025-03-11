import TextHero from "@/components/ui/heros/TextHero";
import Main from "@/components/structure/Main";
import JobsList from "./JobsList";
import { jobsData } from "@/data/career";

export default function Page() {
	return (
		<>
			<TextHero
				title="Join the BritLogic team"
				subtitle="We are always looking for talented individuals to join our team"
			/>

			<Main className="lg:mb-12 min-h-dvh">
				<JobsList jobsData={jobsData} />
			</Main>
		</>
	);
}
