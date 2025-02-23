import OfficeChip from "@/components/cards/OfficeChip";
import { offices } from "@/data/offices";
const FooterContent = () => {
	return (
		<div>
			footer content
			<div className="flex flex-col gap-2">
				<FooterOffices />
			</div>
		</div>
	);
};

export default FooterContent;

function FooterOffices() {
	return offices.map((office) => {
		return (
			<OfficeChip
				key={office.id}
				{...office}
			/>
		);
	});
}
