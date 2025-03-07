import Main from "@/components/structure/Main";
import TextHero from "@/components/ui/heros/TextHero";
import ContactForm from "./ContactForm";

export default function Page() {
	return (
		<>
			<TextHero
				title="Contact our experts to see how BritLogic can transform your business"
				subtitle="Let's innovate together!"
			/>

			<Main className="mb-12 min-h-dvh">
				<ContactForm />
			</Main>
		</>
	);
}
