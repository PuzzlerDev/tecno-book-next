import { CategoriesContent } from "../components/categories-page";
import Loading from "../components/loading";
import { API_URL } from "../helpers/constants";

const Categories = ({ categories }) => {
  console.log(categories);
  return categories?.length ? (
    <>
      <CategoriesContent categories={categories} />
    </>
  ) : (
    <Loading />
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/categories`);
  const categories = await res.json();

  if (!categories) {
    return {
      notFound: true,
    }
  }

  return {
    props: { categories }
  }
}

export default Categories;
