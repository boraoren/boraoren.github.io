import { Button, ChakraProvider, useColorMode } from "@chakra-ui/react";
// 1. Import the utilities
import { extendTheme } from "@chakra-ui/react";
import theme from "./theme";

function MyApp({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
