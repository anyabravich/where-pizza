import Footer from "components/Footer"
import Header from "components/Header"
import Main from "components/Main"
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
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
        <GlobalStyle />
      </Theme>
    </>
  )
}

export default MyApp
