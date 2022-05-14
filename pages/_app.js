import Head from "node_modules/next/head"
import GlobalStyle from "styles/GlobalStyle"
import Theme from "styles/Theme"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Theme>
        <GlobalStyle />
        <Component {...pageProps} />
      </Theme>
    </>
  )
}

export default MyApp
