import { type JobOpprtunityT } from "@/data/career";
import Badge from "@/components/ui/Badge";
import Icons from "@/components/icons";
import ButtonLink from "@/components/buttons/ButtonLink";
import JobDetailRow from "@/components/ui/JobDetailRow";
import Link from "next/link";

export default function JobsList({ jobsData }: { jobsData: JobOpprtunityT[] }) {
	return (
		<div className="my-12">
			{jobsData.map((job, i) => (
				<div
					key={job.id + i}
					className="job-list-card"
				>
					<Badge variant="secondary">{job.category}</Badge>
					<Link href={`./career/job/${job.slug}`}>
						<h2 className="cursor-pointer">{job.title}</h2>
					</Link>
					<div className="description-excerpt">{limitExcerpt(job.detail.description, 1000)}</div>
					<JobDetailRow icon={<Icons.Badge size={18} />}>{job.detail.level} level</JobDetailRow>
					<JobDetailRow icon={<Icons.Timer size={18} />}>{job.positionType}</JobDetailRow>
					<JobDetailRow icon={<Icons.Location size={18} />}>{job.location.join(", ")}</JobDetailRow>
					<JobDetailRow icon={<Icons.Payment size={18} />}>{job.detail.salary}</JobDetailRow>
					<Link href={`./career/job/${job.slug}`}>
						<ButtonLink
							className="max-w-max my-4"
							iconName="ChevronRight"
							iconPosition="right"
							type="primary"
							label="View Job"
						/>
					</Link>
				</div>
			))}
		</div>
	);
}

function limitExcerpt(excerpt: string, limit: number = 1000) {
	if (excerpt.length <= limit) return excerpt;
	return excerpt.slice(0, limit) + "...";
}
