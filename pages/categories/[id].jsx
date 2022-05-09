import { CategoryCover, CategoryBooks } from "../../components/category-page";

const Category = ({ category }) => {
  return category?.id ? (
    <>
      <CategoryCover category={category} />
      <CategoryBooks books={category.books} />
    </>
  ) : null;
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE}/categories/`);
  const data = await res.json();
  const paths = data.map(category => {
    return {
      params: {id: category.id.toString() }
    }
  });

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE}/categories/${params.id}`);
  const category = await res.json();

  // Pass data to the page via props
  return {
    props: {
      category,
    },
  };
}

export default Category;
