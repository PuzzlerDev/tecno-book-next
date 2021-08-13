import '../styles/globals.css';
import Layout from "../components/layout";
import {getStaticProps} from "../lib/api";
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps,home }) {

  return (
    <Layout>
      <Component {...pageProps} home={home}/>
    </Layout>
  )
}

MyApp.getInitialProps = async(ctx) => {
  const [home,categories] = await Promise.all([getStaticProps("/home-page")],[getStaticProps("/categories")]);

  return {
    home,categories
  }
}

export default MyApp
