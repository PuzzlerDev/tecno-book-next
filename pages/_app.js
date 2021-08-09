import '../styles/globals.css';
import { getStaticProps } from "../lib/api";


function MyApp({ Component, pageProps,home }) {

  return <Component {...pageProps} home={home}/>
}

MyApp.getInitialProps = async(ctx) => {
  const [home,categories] = await Promise.all([getStaticProps("/home-page")],[getStaticProps("/categories")]);

  return {
    home,categories
  }
}

export default MyApp
