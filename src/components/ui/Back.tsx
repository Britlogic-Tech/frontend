import Link from "next/link";
import ArrowLeft from "../icons/ArrowLeft";

const Back = ({ referrer }: { referrer: string }) => {
	if (!referrer) return null;
	return (
		<Link href={referrer}>
			<div className="back-button">
				<ArrowLeft />
			</div>
		</Link>
	);
};

export default Back;
