
import Head from 'next/head';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tecno Book</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <main>{children}</main>
    </>
  )
};

export default Layout;