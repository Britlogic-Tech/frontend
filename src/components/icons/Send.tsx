import def from "./iconDefaults";
type IconPropsT = {
	fill?: string;
	size?: number;
};
const Send = ({ fill, size }: IconPropsT) => {
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
			<path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
		</svg>
	);
};

export default Send;
