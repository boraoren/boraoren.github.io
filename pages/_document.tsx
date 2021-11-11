import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

import myTheme from "../data/themes/index";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  createFontFamilyLinks = () => {
    const fontFamilyLinks = [];
    for (const [key, font] of Object.entries(myTheme.fontFamily)) {
      fontFamilyLinks.push(<link key={key} href={font.url} rel="stylesheet" />);
    }
    return fontFamilyLinks;
  };

  render() {
    return (
      <Html>
        <Head>{this.createFontFamilyLinks()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
