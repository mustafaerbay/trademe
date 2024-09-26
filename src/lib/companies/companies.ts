import type { Product } from ".";

export const fetchFromDB = async () => {
	return ((await import.meta.glob('./*.json')['./db.json']()) as any).default as Company[];
};

export async function getPostSummaries() {
	const posts = await fetchFromDB();
	const postSummaries = posts.map((p) => ({
		id: p.id,
		name: p.name,
		products: p.products,
		
	}));
	return posts;
}

export async function getPostBySlug(slug: string) {
	const posts = await fetchFromDB();
	return posts.find((p) => p.slug === slug);
}


export type Company = {
	slug: string;
	id: string;
	name: string;
	ceo: string;
	website: string;
	founded: string;
	sector: string;
	industry: string;
	content: string;
	legalName: string;
	employeeCount: number;
	revenue: Revenue[]
	products: Product[]
	otherOffices: Office[]
	socialMedia: SocialMedia
	headquarters: Headquarters
};

export type Headquarters = {
	city: string;
	state: string;
	zipCode: string;
	address: string;
	country: Country
}

export type SocialMedia = {
	url: string
	name: string
}
export type Revenue = {
	year: number;
	amount: number;
	currency: string;
}

export type Office = {
	city: string;
	state: string;
	country: Country
}
export type Offices = {
	offices: Office[];
}
export type Countries = {
	countries: Country[];
}
export type Country = {
	name: string;
	code: string;
}

