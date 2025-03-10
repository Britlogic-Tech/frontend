import Main from "@/components/structure/Main";
import TextHero from "@/components/ui/heros/TextHero";
import ContactForm from "@/components/forms/ContactForm";
import CitationHero from "@/components/ui/heros/CitationHero";

export default function Page() {
	return (
		<>
			<TextHero title="Contact our experts to see how BritLogic can transform your business" />

			<Main className="mb-12 min-h-dvh">
				<CitationHero title="Let's innovate together!">
					<p className="w-full text-center">
						Get in touch with us today to discuss how we can help you harness the power of
						technology to achieve your goals.
					</p>
				</CitationHero>
				<ContactForm title="Speak with a BritLogic expert" />
			</Main>
		</>
	);
}
