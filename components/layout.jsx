import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>TechBook</title>
      </Head>
      <Nav />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
