import def from "./iconDefaults";
type IconPropsT = {
	fill?: string;
	size?: number;
};
const Close = ({ fill, size }: IconPropsT) => {
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
			<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
		</svg>
	);
};

export default Close;
