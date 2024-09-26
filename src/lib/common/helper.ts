import type { Company } from "$lib/companies";

const fetchFromDB = async () => {
	return ((await import.meta.glob('./*.json')['../companies/db.json']()) as any).default as Company[];
};

export async function getPostSummaries() {
	const posts = await fetchFromDB();
	const postSummaries = posts.map((p) => ({
		id: p.id,
		name: p.name,
		products: p.products
	}));
	return postSummaries;
}