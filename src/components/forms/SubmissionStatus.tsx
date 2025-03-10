export default function SubmissionStatus({
	status,
}: {
	status: { success?: boolean; message?: string };
}) {
	return (
		<div className={`submission-status ${status.success ? "good" : "bad"}`}>
			<h2>{status.success ? "Thank You!" : "Uh oh!"}</h2>
			<p>{status.message}</p>
		</div>
	);
}
