import { companyInfo as info } from "@/data/companyInfo";

function getRegIn() {
	const { registered = "", registeredIn = "" } = info;
	return (registeredIn ? ["Registered", registered, "in", registeredIn].join(" ") : "").trim();
}

function getRegNumber() {
	const { registrationNumber = "", vatNumber = "" } = info;
	const regNum = (
		registrationNumber ? `Company registration number ${registrationNumber}` : ""
	).trim();
	const vatNum = (vatNumber ? `VAT number ${vatNumber}` : "").trim();
	return { regNum, vatNum };
}

function getRegOffice() {
	const { address = "" } = info;
	return address.trim();
}

const FooterCompanyInfo = () => {
	return (
		<div className="mt-4">
			{info.name && (
				<div>
					<p>
						<strong>{info.name}</strong>
					</p>
					<p>{getRegIn()}</p>
					<p>{getRegOffice()}</p>
					<p>{getRegNumber().regNum}</p>
					<p>{getRegNumber().vatNum}</p>
				</div>
			)}
		</div>
	);
};

export default FooterCompanyInfo;
