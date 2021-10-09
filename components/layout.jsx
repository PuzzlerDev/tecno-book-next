import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
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
