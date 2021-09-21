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
