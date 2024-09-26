<script>
  import Select from 'svelte-select';
  import { countries } from 'countries-list';

  const countryNames = Object.values(countries).map(country => ({
    value: country.name,
    label: country.name,
  }));

  // Updated company data
  let companies = [
    {
      id: "c001",
      name: "TechNova Solutions",
      legalName: "TechNova Solutions Inc.",
      founded: 2010,
      headquarters: {
        address: "123 Innovation Drive",
        city: "San Francisco",
        state: "CA",
        zipCode: "94105",
        country: {
          name: "United States",
          code: "US"
        }
      },
      industry: "Information Technology",
      sector: "Software",
      employeeCount: 1500,
      ceo: "Sarah Johnson",
      publiclyTraded: true,
      revenue: {
        amount: 500000000,
        currency: "USD",
        year: 2023
      },
      website: "https://www.technovasolutions.com",
      products: [
        {
          id: "p001",
          name: "CloudSync Pro",
          shippingOptions: [
            {
              method: "Digital Download",
              availableCountries: ["Worldwide"] // This can be any country for digital products
            }
          ]
        },
        {
          id: "p003",
          name: "EcoCharge",
          shippingOptions: [
            {
              method: "Standard Shipping",
              fromCountry: {
                name: "United States",
                code: "US"
              },
              toCountries: [
                { name: "United States", code: "US" },
                { name: "Canada", code: "CA" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "c002",
      name: "GreenEarth Innovations",
      legalName: "GreenEarth Innovations LLC",
      founded: 2015,
      headquarters: {
        address: "456 Eco Boulevard",
        city: "Austin",
        state: "TX",
        zipCode: "78701",
        country: {
          name: "United States",
          code: "US"
        }
      },
      industry: "Renewable Energy",
      sector: "Clean Technology",
      employeeCount: 500,
      ceo: "Michael Green",
      publiclyTraded: false,
      revenue: {
        amount: 75000000,
        currency: "USD",
        year: 2023
      },
      website: "https://www.greenearthinnovations.com",
      products: [
        {
          id: "p003",
          name: "EcoCharge",
          shippingOptions: [
            {
              method: "Standard Shipping",
              fromCountry: {
                name: "United States",
                code: "US"
              },
              toCountries: [
                { name: "United States", code: "US" },
                { name: "Canada", code: "CA" }
              ]
            }
          ]
        }
      ]
    }
  ];

  let productName = '';
  let fromCountry = null; // Initialize as null
  let toCountry = null; // Initialize as null
  let filteredCompanies = []; // Array to hold filtered companies

  function submitForm() {
    if (fromCountry && toCountry && productName) {
      const selectedFromCountry = fromCountry.value;
      const selectedToCountry = toCountry.value;

      // Filter companies based on selected product name and check fromCountry and toCountries
      filteredCompanies = companies.filter(company => {
        return company.products.some(product => {
          return product.name === productName && product.shippingOptions.some(option => {
            return option.fromCountry.name === selectedFromCountry && option.toCountries.some(country => country.name === selectedToCountry);
          });
        });
      });
    }
  }
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-50">
  <h1 class="text-4xl font-bold mb-4">Product Information</h1>

  <form on:submit|preventDefault={submitForm} class="space-y-4 w-1/2">
    <input
      bind:value={productName}
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

  <h2 class="text-2xl font-bold mt-8">Companies offering {productName} shipping from {fromCountry ? fromCountry.value : ''} to {toCountry ? toCountry.value : ''}</h2>
  <ul class="mt-4 w-1/2">
    {#each filteredCompanies as company}
      <li class="border p-2 mb-2 rounded">
        <strong>Name:</strong> {company.name}<br />
        <strong>Email:</strong> {company.ceo} (CEO)<br />
        <strong>Website:</strong> <a href={company.website} target="_blank">{company.website}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
