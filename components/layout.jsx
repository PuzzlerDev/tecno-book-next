import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Technology Book</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Technology Book" key="title" />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
