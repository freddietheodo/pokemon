import { extendTheme } from 'native-base';

export const BaseTheme = extendTheme({
	fontConfig: {
		Roboto: {
		  100: {
			normal: "Roboto-Light",
			italic: "Roboto-LightItalic",
		  },
		},
	
	},
	fonts: {
		heading: "Roboto",
		body: "Roboto",
		mono: "Roboto",
	  },
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
		green: '#50cf57',
		red: '#ff5855',
		blue: '#71b9e5',
		yellow: '#f9c95a',
		pink: '#ff8f8d',
		purple: '#c26aff',
		white: '#f4e9fd',
		background: '#f7f7f7',
		brown: '#c4865a',
		gray: '#bebfbf',
		black: '#2f3030',
	},
	Pressable: {
		cursor: 'pointer',
	},

	config: {
		// Changing initialColorMode to 'dark'
		initialColorMode: 'dark',
	},
});