import "../styles/globals.css";
import Layout from "../components/Layout";
import { getStaticProps } from "../lib/api";
import "bootstrap/dist/css/bootstrap.css";

const MyApp = ({ Component, pageProps, home, nav, categories }) => {
  return (
    <Layout nav={nav}>
      <Component {...pageProps} home={home} categories={categories} />
    </Layout>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const [home, categories, nav] = await Promise.all([
    getStaticProps("/home-page"),
    getStaticProps("/categories"),
    getStaticProps("/nav"),
  ]);

  return {
    home,
    categories,
    nav,
  };
};

export default MyApp;
