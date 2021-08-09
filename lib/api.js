export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:1337${context}`);
  const data = await res.json();

  if (!data) {
      return {
        notFound: true,
      }
    }

  return data;
}