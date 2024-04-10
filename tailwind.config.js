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
				text: 'var(--daisyui-text-color)',
				onSecondary: '#fff',
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
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					primary: '#ffcc29',
					secondary: '#2086bf',
					'--daisyui-text-color': '#fff',
				},
				light: {
					...require('daisyui/src/theming/themes')['light'],
					primary: '#ffcc29',
					secondary: '#2086bf',
					'--daisyui-text-color': '#000',
				},
			},
		],
	},
};
