import def from "./iconDefaults";
type IconPropsT = {
	fill?: string;
	size?: number;
};
const Timer = ({ fill, size }: IconPropsT) => {
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
			<path d="M367.69-850v-60h224.62v60H367.69ZM450-407.69h60v-224.62h-60v224.62ZM480-100q-70.15 0-132-26.77-61.85-26.77-108.15-73.08-46.31-46.3-73.08-108.15Q140-369.85 140-440t26.77-132q26.77-61.85 73.08-108.15 46.3-46.31 108.15-73.08Q409.85-780 480-780q60.08 0 115.73 20.39 55.65 20.38 103.35 58.38l49.84-49.84 42.15 42.15-49.84 49.84q38 47.7 58.38 103.35Q820-500.08 820-440q0 70.15-26.77 132-26.77 61.85-73.08 108.15-46.3 46.31-108.15 73.08Q550.15-100 480-100Zm0-60q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
		</svg>
	);
};

export default Timer;
