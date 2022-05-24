import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { DrawerContextProvider } from '../context/DrawerContext';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<DrawerContextProvider>
				<Component {...pageProps} />
			</DrawerContextProvider>
		</ChakraProvider>
	);
}

export default MyApp;
