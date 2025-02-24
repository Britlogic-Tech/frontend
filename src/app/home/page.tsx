import Main from "@/components/structure/Main";
import Services from "@/app/services/servcies";
import PageHeader from "@/components/ui/PageHeader";
const Home = () => {
	return (
		<>
			{" "}
			<PageHeader
				title="Our services"
				subtitle="We offer a wide range of services to help you with your business needs."
			/>
			<Main>
				<div>Home page</div>
				<Services />
			</Main>
		</>
	);
};

export default Home;
