import '../styles/globals.css';
import Layout from "../components/Layout";
import {getStaticProps} from "../lib/api";
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps,home,nav }) {

  return (
    <Layout nav={nav}>
      <Component {...pageProps} home={home}/>
    </Layout>
  )
}

MyApp.getInitialProps = async(ctx) => {
  const [home,categories,nav] = await Promise.all([getStaticProps("/home-page")],[getStaticProps("/categories")],[getStaticProps("/nav")]);

  return {
    home,categories,nav
  }
}


export default MyApp;
