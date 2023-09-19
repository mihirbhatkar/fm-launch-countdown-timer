/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"prim-grayish-blue": "hsl(237, 18%, 59%)",
				"prim-soft-red": "hsl(345, 95%, 68%)",

				"neu-dark-desaturated-blue": "hsl(236, 21%, 26%)",
				"neu-very-dark-blue": "hsl(235, 16%, 14%)",
				"neu-very-black-blue": "hsl(234, 17%, 12%)",
			},
		},
	},
	plugins: [],
};
