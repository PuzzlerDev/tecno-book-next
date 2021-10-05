import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children, nav }) => {
  return (
    <>
      <Head>
        <title>Tecno Book</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Tecno Book" key="title" />
      </Head>
      <Nav nav={nav} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
