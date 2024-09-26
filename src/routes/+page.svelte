<script>
    import Select from "svelte-select";
    import { countries } from "countries-list";
    import { getCountryCode } from "countries-list";

    import * as company_info from "$lib/data/company_list.json";

    const countryNames = Object.values(countries).map((country) => ({
        value: country.name,
        label: country.name,
    }));

    // Sample company data with shipsTo field
    let companies = [
        { name: "Company A", shipsTo: "USA", email: "companya@example.com" },
        { name: "Company B", shipsTo: "Canada", email: "companyb@example.com" },
        { name: "Company C", shipsTo: "Canada", email: "companyb@example.com" },
        { name: "Company D", shipsTo: "Canada", email: "companyb@example.com" },
        { name: "Company E", shipsTo: "Canada", email: "companyb@example.com" },
        { name: "Company F", shipsTo: "Canada", email: "companyb@example.com" },
        { name: "Company G", shipsTo: "US", email: "companyc@example.com" },
    ];

    let companies_new = company_info;

    let product = "";
    let fromCountry = null; // Initialize as null
    let toCountry = "";
    let filteredCompanies = []; // Array to hold filtered companies

    function submitForm() {
        console.log("countryNames", countryNames);
        if (fromCountry) {
            // Extract the country value
            const selectedFromCountry = fromCountry.value;
            const selectedFromCountry_Code =
                getCountryCode(selectedFromCountry);
            console.log("getCountryCode:", selectedFromCountry_Code);

            // Filter companies based on selected shipsTo
            filteredCompanies = companies.filter(
                (company) => company.shipsTo === selectedFromCountry,
            );

            // Reset other form fields
            // product = "";
            // toCountry = "";
        }
    }
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <h1 class="text-4xl font-bold mb-4">Product Information</h1>

    <form on:submit|preventDefault={submitForm} class="space-y-4 w-1/2">
        <input
            bind:value={product}
            type="text"
            placeholder="Product Name"
            class="w-full p-2 border rounded"
        />

        <Select
            items={countryNames}
            bind:value={fromCountry}
            placeholder="From Country"
            class="w-full"
        />

        <Select
            items={countryNames}
            bind:value={toCountry}
            placeholder="To Country"
            class="w-full"
        />

        <button type="submit" class="bg-blue-500 text-white p-2 rounded">
            Submit
        </button>
    </form>

    <h2 class="text-2xl font-bold mt-8">
        Companies shipping to {fromCountry ? fromCountry.value : ""}
    </h2>
    <div class="cp_list">
        <!-- <ul class="mt-4 w-1/2"> -->
        {#each filteredCompanies as company}
            <div class="cp_list_item">
                <!-- <li class="border p-2 mb-2 rounded"> -->
                <strong>Name:</strong>
                {company.name}<br />
                <strong>Email:</strong>
                {company.email}
            </div>
            <!-- </li> -->
        {/each}
        <!-- </ul> -->
    </div>
</div>

<style>
    .cp_list {
        display: flex;
        flex-wrap: wrap;
    }
    .cp_list_item {
        flex-grow: 1;
        flex-basis: 200;
    }
</style>
