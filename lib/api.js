import { API_URL } from "../helpers/constants"

export async function getStaticProps(context) {
  const res = await fetch(API_URL + context);
  const data = await res.json();

  if (!data) {
      return {
        notFound: true,
      }
    }

  return data;
}
