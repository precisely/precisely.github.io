module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			minWidth: {
				xs: '20rem' /* 320px */,
				sm: '24rem' /* 384px */,
				md: '28rem' /* 448px */,
				lg: '32rem' /* 512px */,
				xl: '36rem' /* 576px */,
				'2xl': '42rem' /* 672px */,
				'3xl': '48rem' /* 768px */,
				'4xl': '56rem' /* 896px */,
				'5xl': '64rem' /* 1024px */,
				'6xl': '72rem' /* 1152px */,
				'7xl': '80rem' /* 1280px */
			},
			fontFamily: {
				sans: ['Ageo', 'Helvetica', 'Arial', 'sans-serif']
			},
			fontSize: {
				'3xs': '.5rem',
				'2xs': '.6rem',
				'7xl': '5rem'
			},
			colors: {
				// primary:
				// - black
				ink: '#201A1A',
				// - whites
				cloud: '#F2F2F2',
				coconut: '#FEFEFE',
				// - reds and pinks
				cardinal: '#E71F54',
				blush: '#F28599',
				puff: '#FDEDF2',
				// - greys
				grey800: '#2B2B2B',
				grey700: '#505050',
				grey600: '#7E7E7E',
				grey500: '#8D8D8D',
				grey400: '#AFAFAF',
				grey300: '#D7D7D7',
				grey250: '#DCDCDC',
				grey200: '#EAEAEA',
				grey100: '#EDEDED',
				grey50: '#F6F6F6',
				// - blues
				cobalt: '#234DA1',
				peppermint: '#f3f8fe',
				// - green
				parakeet: '#1EC69C',
				// secondary:
				azure: '#0069DF',
				darkBlue: '#295087',
				blue: '#3E70B7',
				clover: '#20C882',
				monarch: '#FA6400',
				proton: '#7451F0',
				butterscotch: '#F7B500',
				lapis: '#0080FF', // info messages
				salamander: '#FF4400',
				royal: '#7700F4',
				bubblegum: '#FF14B0',
				aqua: '#00DFEC'
			}
		}
	},
	plugins: []
};
