import { getPostSummaries, getProducts } from "$lib/companies";
import type { PageLoad } from "./$types";


export const load = async () => {
    return {
        companies: await getPostSummaries(),
        products: await getProducts()
    }
};