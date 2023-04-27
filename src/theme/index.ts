import { extendTheme } from 'native-base';

export const BaseTheme = extendTheme({
	components: {
		Text: {
			defaultProps: {
				fontSize: 'lg',
				color: 'black',
			},
		},
	},
	colors: {
		slateGray: {
			50: '#f3f2f2',
			100: '#d8d8d8',
			200: '#bebebe',
			300: '#a3a3a3',
			400: '#898989',
			500: '#6f6f6f',
			600: '#565656',
			700: '#3e3e3e',
			800: '#252525',
			900: '#0d0c0d',
		},
		orange: {
			50:'#f68809',
			200: '#d87708',
		},
		green: '#0fcd09',
		red: '#f2660d',
		blue: '#0d8cf2',
		yellow: '#feee01',
		pink: '#ec1390',
		purple: '#8411ee',
		white: '#f4e9fd',
		background: '#ffffff'
	},
	Pressable: {
		cursor: 'pointer',
	},

	config: {
		// Changing initialColorMode to 'dark'
		initialColorMode: 'dark',
	},
});