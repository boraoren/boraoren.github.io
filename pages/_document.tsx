import Document, {Head, Html, Main, NextScript,} from "next/document";
import {ColorModeScript} from "@chakra-ui/react";
import theme from "../data/themes/theme";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head/>
        <body>
          {/* 👇 Here's the chakra-ui color script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
