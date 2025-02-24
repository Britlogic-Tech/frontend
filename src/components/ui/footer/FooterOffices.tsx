import { offices } from "@/data/offices";
import OfficeChip from "@/components/cards/OfficeChip";
export default function FooterOffices() {
	return offices.map((office) => {
		return (
			<OfficeChip
				key={office.id}
				{...office}
			/>
		);
	});
}
