/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Rubik', 'sans-serif'],
				title: ['Playfair Display', 'serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#ffcc29',
				secondary: '#2086bf',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		base: true,
		styled: true,
		utils: true,
		themes: [
			{
				mytheme: {
					primary: '#ffcc29',
					secondary: '#2086bf',
					neutral: '#827e79',
					info: '#0000ff',
					success: '#588D41',
					warning: '#FFF300',
					error: '#FC2E21',
				},
			},
		],
	},
};
