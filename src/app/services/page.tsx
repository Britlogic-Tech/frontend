import PageHeader from "@/components/ui/PageHeader";
import Services from "./Services";

const page = () => {
	return (
		<>
			<PageHeader
				title="Our services"
				subtitle="We offer a wide range of services to help you with your business needs."
				referrer="/"
			/>
			<Services />
		</>
	);
};

export default page;
