// pages/_document.js
import React from "react"
import theme from "../themes/theme"
import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href="/assets/fonts/Inter-Regular.ttf"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/assets/fonts/Inter-Medium.ttf"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/assets/fonts/Inter-SemiBold.ttf"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/assets/fonts/Inter-Bold.ttf"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/assets/fonts/Lobster-Regular.ttf"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
          <Script
            async
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}`}
          />
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments);}
              gtag("js", new Date());
              gtag("config", '${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}')
            `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
