<script lang="ts">
    import Select from "svelte-select";
    import type { Company, Country } from "$lib/companies/companies";
    import { countries } from "countries-list";
    // let toCountry: Country = { name: '', code: '' };
    // let fromCountry: Country = { name: '', code: '' };
    export let data;
    // let allCountries: Country[] = ""
    let fromCountry = "";
    let toCountry = "";
    let toSelected = "";
    let fromSelected = "";
    let productSelected = "";
    $: companies = data.companies;
    $: c_products = data.products;
    console.log("data:", data.products);
    const countryNames = Object.values(countries).map((country) => ({
        value: country.name,
        // label: country.name,
        // name: country.name
    }));
    $: console.log("Changed fromSelected:", fromSelected);
    console.log("fromSelected:", fromSelected);
    // console.log(countries);

    let productName = "";
    // let filteredCompanies = Company[];
    let filteredCompanies: Company[] = [];
    function runFilter() {
        console.log("runFilter run")
        if (toSelected && fromSelected && productSelected) {
            const selectedFromCountry = fromSelected.value;
            const selectedToCountry = toSelected.value;
            console.log("selectedFromCountry:", selectedFromCountry);
            console.log("selectedToCountry:", selectedToCountry);
            // Filter companies based on selected product name and check fromCountry and toCountries
            filteredCompanies = companies.filter((company) => {
                return company.products.some((product) => {
                    return (
                        product.name === productSelected &&
                        product.shippingOptions.some((opt) => {
                            return (
                                (opt.fromCountry.name === selectedFromCountry &&
                                    opt.toCountry.name === selectedToCountry)
                                // opt.fromCountry.name((from) => {
                                //     from.name === selectedFromCountry
                                // }) &&
                                // opt.toCountry.some((to) => {
                                //     to.name === selectedToCountry
                                // })
                            );
                        })
                        // product.name === productName &&
                        // product.shippingOptions.some((option) => {
                        //     return (
                        //         option.fromCountry.some(
                        //             (f_country) =>
                        //                 f_country.name ===
                        //                 selectedFromCountry.value,
                        //         ) &&
                        //         option.toCountry.some(
                        //             (t_country) =>
                        //                 t_country.name ===
                        //                 selectedToCountry.value,
                        //         )
                        //     );
                        //     // return option.fromCountry.name === selectedFromCountry && option.toCountries.some(country => country.name === selectedToCountry);
                        // })
                    );
                });
            });
        }
    }
</script>

<!-- <div>
    {#each countryNames as item}
        {item.value}
    {/each}
</div> -->
<div class="grid grid-cols-12 gap-4 justify-center">
    <!-- <div class="grid grid-cols-12 gap-4 justify-center divide-x-2"> -->
    <div class="col-span-2 bg-gray-200">
        <h3 class="text-center">Filter Section</h3>
        <div class="mb-2">
            <!-- class="mr-4 border placeholder:text-slate-400 text-slate-700 " -->
            <select
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                placeholder="From Country"
                bind:value={fromSelected}
                on:change={() => (runFilter())}
            >
                <option class="mr-4" value="" disabled selected hidden
                    >Select a country from</option
                >
                <option value="All">All</option>

                {#each countryNames as countr}
                    <option class="mr-4" value={countr}>
                        {countr.value}
                    </option>
                {/each}
            </select>
            <select
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                placeholder="From Country"
                bind:value={toSelected}
                on:change={() => (runFilter())}
            >
                <option class="mr-4" value="" disabled selected hidden
                    >Select a country to</option
                >
                <option value="All">All</option>
                {#each countryNames as countr}
                    <option class="mr-4" value={countr}>
                        {countr.value}
                    </option>
                {/each}
            </select>
        </div>
        <select
            class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer mb-4"
            bind:value={productSelected}
            on:change={()=> runFilter()}
        >
            <option class="mr-4" value="" disabled selected hidden
                >Select Product</option
            >
            <option value="All">All</option>
            {#each c_products as c_prod}
                {#each c_prod.products as item}
                    <option class="mr-4" value={item.name}>
                        {item.name} - {item.gtipCode} - {item.id}
                    </option>
                {/each}
            {/each}
        </select>

        <!-- <div class="mb-2">
            <Select
                items={countryNames}
                bind:value={toCountry}
                placeholder="To Country"
                class="w-full"
            />
        </div>
        <div class="mb-2">
            <Select
                items={countryNames}
                bind:value={fromSelected}
                placeholder="From Country"
                class="w-full"
            />
        </div> -->
        <div>
            <button
                class="bg-blue-400 rounded-md w-full"
                on:click={() => runFilter()}>Filter</button
            >
        </div>
    </div>
    <div class="col-span-2 bg-gray-300">
        <h3 class="text-center">CompanyList</h3>
        {#each companies as company}
            <div class="p-4 bg-red-100 mb-4 text-center">
                <div>
                    <p>{company.name}</p>
                </div>
            </div>
        {/each}
    </div>
    <div class="col-span-2 bg-gray-200">
        <h3 class="text-center">Product List</h3>
        {#each companies as company}
            <div class="p-2 bg-red-300 mb-4 rounded-md">
                <div>
                    <p class="text-xs place-item-start bg-gray-100">
                        C:{company.name}
                    </p>
                    {#each company.products as product}
                        <div class="border text-center p-2">
                            <p class="text-wrap">{product.name}</p>
                            <ul>
                                {#each product.shippingOptions as item}
                                    <!-- content here -->
                                    <div class="bg-red-100 mb-2">
                                        <li class="text-xs">{item.method}</li>
                                        <p class="place-item-start text-xs font-mono">
                                            {item.fromCountry.name} - {item
                                                .toCountry.name} - [{item.cost ? item.cost : "0"}]
                                        </p>
                                    </div>
                                {/each}
                            </ul>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
    <div class="col-span-6 bg-gray-300">
        <!-- <h3 class="text-center">Available Product List</h3> -->
        <h2 class="text-2xl font-bold mt-8">
            <p>
                Companies offering {productSelected ? productSelected : "___"}

                shipping from {fromSelected ? fromSelected.value : "___"} to
                {toSelected ? toSelected.value : "___"}
            </p>
        </h2>
        <!-- <ul class="mt-4 w-1/2"> -->
        <div class="grid col-span-6 bg-green-400">
            {#if filteredCompanies.length > 0}
                <!-- <div>product found</div> -->
                {#each filteredCompanies as company}
                    <!-- <li class="border p-2 mb-2 rounded"> -->
                    <div class="col-span-1">
                        <strong>Name:</strong>
                        {company.name}<br />
                        <strong>Email:</strong>
                        {company.ceo} (CEO)<br />
                        <strong>Website:</strong>
                        <a href={company.website} target="_blank"
                            >{company.website}</a
                        >
                        <p></p>
                    </div>
                    <!-- </li> -->
                {/each}
            {:else}
                <div class="bg-red-400">Please make selection first</div>
            {/if}
        </div>
    </div>
</div>
