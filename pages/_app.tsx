import {Button, ChakraProvider, useColorMode} from "@chakra-ui/react";
// 1. Import the utilities
import {extendTheme} from "@chakra-ui/react";
import theme from "../data/themes/theme";
import type {AppProps} from 'next/app'
import '@fontsource/roboto/900.css';
import '@fontsource/roboto/400.css';
import '@fontsource/caveat/400.css';
import '@fontsource/handlee/400.css';
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/500-italic.css'
import Script from "next/script";
import * as gtag from "../lib/gtag";
import {useRouter} from "next/router";
import {useEffect} from "react";

function MyApp({Component, pageProps}: AppProps) {
    const {colorMode, toggleColorMode} = useColorMode();

    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>

            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-TS25Q1DBYG`}
            />
            <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-TS25Q1DBYG', {
                                    page_path: window.location.pathname,
                            });
                        `,
                }}
            />


            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
