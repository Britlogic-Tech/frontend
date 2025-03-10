export default function getDataBySlug<T extends { slug: string }>(
	set: Array<T>,
	slug: string
): T | undefined {
	return set.find((s) => slug === s.slug);
}
