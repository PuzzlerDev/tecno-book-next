export async function getStaticProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE + context);
  const data = await res.json();

  if (!data) {
      return {
        notFound: true,
      }
    }

  return data;
}


export async function getServerSideProps(context) {
  console.log(context)
  // Fetch data from external API
  const res = await fetch(process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE + context)
  const data = await res.json()

  // Pass data to the page via props
  return data;
}