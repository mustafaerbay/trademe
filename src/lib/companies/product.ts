import { fetchFromDB, type Country } from "./companies";

export async function getProducts() {
    const companies = await fetchFromDB();
    const productList = companies.map((p) => ({
        products: p.products

    }));
    return productList;
}

export type Product = {
    id: string;
    sicCode: string;
    gtipCode: string;
    name: string;
    price: number;
    currency: string;
    category: string;
    launchDate: string;
    description: string;
    freeTrialDays: number;
    subscriptionModel: string;
    technicalSpecs: TechnicalSpecs;
    customerSupport: CustomerSupport;
    shippingOptions: ShippingOptions[];
};

export type TechnicalSpecs = {
    size: string;
    weight: string;
};

export type CustomerSupport = {
    email: string;
    phone: string;
    availableHours: string;
};

export type ShippingOptions_v1 = {
    method: string;
    fromCountry: Country[];
    toCountry: ShippingToCountry[];
};
export type ShippingOptions = {
    name: string;
    cost: number;
    method: string;
    shipping_code: string;
    estimatedDelivery: string;
    toCountry: Country;
    fromCountry: Country;
};

export type ShippingToCountry = {
    name: string;
    code: string;
    cost: number;
    estimatedDelivery: string;
}

export let ShippingOptionsSelection = [
    "Digital Product",
    "Standart Shipping",
    "Plane",
    "Ship",
    "Truck"
]

export let EstimatedDelivery = [
    "Instant",
    "1 - 3 Days",
    "3 - 7 Days",
    "7 - 21 Days",
    "21 - 30 Days"
]

