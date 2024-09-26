### svelte - tailwind initial configs
pick skeleton
```

npm create svelte@latest export-website 
cd export-website
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### optional
```
npm install i18next svelte-i18next
npm install @smui/select
npm install svelte-select
npm install country-json
```

### must postcss.config.cjs
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### must tailwind.config.cjs
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Include Svelte and TypeScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### must app.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### must app.html
```
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="/src/app.css" rel="stylesheet">
  <svelte:head />
</head>
```