// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

const colors = {
	lightblue: {
		100: '#6D9AC4',
	},
	customgray: {
		50: '#EEF5FB',
		100: '#D8E8F5',
	},
	messenger: {
		default: '#0078FF',
	},
};

export const theme = extendTheme({
	colors,
	components: {
		Divider: {
			colorScheme: {
				gray: {
					900: '#000',
				},
			},
		},
	},
	styles: {
		global: {
			body: {
				bg: 'customgray.50',
			},
		},
	},
});
