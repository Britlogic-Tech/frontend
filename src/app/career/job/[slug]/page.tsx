import Main from "@/components/structure/Main";
import LongContent from "@/components/structure/LongContent";
import TextHero from "@/components/ui/heros/TextHero";
import getDataBySlug from "@/lib/getDataBySlug";
import { jobsData } from "@/data/career";
import ApplicationForm from "@/components/forms/ApplicationForm";

type ParamsT = Promise<{ slug: string }>;

export default async function page({ params }: { params: ParamsT }) {
	const { slug } = await params;
	if (!slug) return <div>Not found</div>;

	const job = getDataBySlug(jobsData, slug);

	if (!job) return <div>Bad slug! {slug}</div>;

	return (
		<>
			<TextHero
				title="Join the BritLogic team"
				subtitle="We are always looking for talented individuals to join our team"
			/>

			<Main className="my-12 min-h-dvh">
				<div className="job-description">
					<h2 className="job-title">{job.title}</h2>
					<p>
						<strong>Category:</strong> {job.category}
					</p>
					<p>
						<strong>Status:</strong> Active
					</p>
					<p>
						<strong>Position Type:</strong> {job.positionType}
					</p>
					<p>
						<strong>Location:</strong> {job.location.join(", ")}
					</p>

					<p>
						<strong>Level:</strong> {job.detail.level}
					</p>
					<p>
						<strong>Experience:</strong> {job.detail.experience}
					</p>
					<p>
						<strong>Skills:</strong> {job.detail.skills?.join(", ")}
					</p>
					<p>
						<strong>Salary:</strong> {job.detail.salary}
					</p>
					<LongContent>
						<div className="job-description-section">
							<div className="job-description-title">Description</div>
							<div className="job-description-content">{job.detail.description}</div>
						</div>

						{job.benefits && (
							<div className="job-description-section">
								<div className="job-description-title">Benefits</div>
								<ul className="job-description-content">
									{job.benefits.map((benefit, i) => (
										<li key={i}>{benefit}</li>
									))}
								</ul>
							</div>
						)}
					</LongContent>
				</div>
				<div className="h-24"></div>
				<ApplicationForm
					id={job.id}
					title={`Applying for ${job.detail.level} ${job.title} position`}
				/>
			</Main>
		</>
	);
}
