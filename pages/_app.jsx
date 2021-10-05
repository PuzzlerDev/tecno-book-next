import "../styles/globals.css";
import Layout from "../components/layout";
import { getStaticProps } from "../lib/api";
import "bootstrap/dist/css/bootstrap.css";

const MyApp = ({ Component, pageProps, home, categories }) => {
  return (
    <Layout>
      <Component {...pageProps} home={home} categories={categories} />
    </Layout>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const [home, categories] = await Promise.all([
    getStaticProps("/home-page"),
    getStaticProps("/categories"),
  ]);

  return {
    home,
    categories,
  };
};

export default MyApp;
