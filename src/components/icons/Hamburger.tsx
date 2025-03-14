import def from "./iconDefaults";
type IconPropsT = {
	fill?: string;
	size?: number;
};
const Hamburger = ({ fill, size }: IconPropsT) => {
	return (
		<svg
			width={size || def.size}
			height={size || def.size}
			viewBox="0 -960 960 960"
			fill={fill || def.fill}
			fillRule="evenodd"
			clipRule="evenodd"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
		</svg>
	);
};

export default Hamburger;
