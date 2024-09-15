/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors:{
				"silver": "#C7C8C8",
				"red-custom": "#EC151E",
				"field-drab": "#564710",
				"french-blue": "#0088f4",
				"sea-green": "#008E4A",
				"walnut-brown": "#736455",
				"khaki": "#B2A392",
				"cal-poly-green": "#135226",
				"bole": "#793930"
			}

		},
	},
	plugins: [],
}
