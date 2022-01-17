import {Button, ChakraProvider, useColorMode} from "@chakra-ui/react";
// 1. Import the utilities
import {extendTheme} from "@chakra-ui/react";
import theme from "./theme";
import type {AppProps} from 'next/app'
import '@fontsource/roboto/900.css';
import '@fontsource/roboto/400.css';
import '@fontsource/caveat/400.css';


function MyApp({Component, pageProps}: AppProps) {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
