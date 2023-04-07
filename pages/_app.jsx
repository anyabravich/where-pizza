import Footer from "components/Footer";
import Header from "components/Header";
import Main from "components/Main";
import Head from "node_modules/next/head";
import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/Theme";
import "styles/swiper.scss";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["900", "800", "700", "600", "400"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Theme>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </Theme>
    </div>
  );
}

export default MyApp;
