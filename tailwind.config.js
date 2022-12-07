/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			screens: {
				sm: '600px',
				md: '728px',
				lg: '984px',
				xl: '1024px',
				'2xl': '1024px',
			},
		},
		extend: {
			colors: {
				'primary-dark': 'rgb(15,23,42)',
			},
		},
	},
	plugins: [],
};
