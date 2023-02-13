import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* Open Graph meta tags */}
          <meta property="og:title" content="Maria C. Moreira - Medicina Chinesa" />
          <meta property="og:description" content="Maria C. Moreira - Tratamentos de Medicina Chinesa em Lisboa. Acupuntura, Ventosaterapia, Moxabustão, Fitoterapia e Dietética." />
          <meta property="og:image" content={`https://mariacmoreira-mtc.vercel.app/logo_maria_openg.png`} />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
