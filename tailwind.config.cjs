/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				lion:'#7d8e7f',
				lionBg:'#6f8071'
			}
		},

	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["emerald","black"],
	  },
}
