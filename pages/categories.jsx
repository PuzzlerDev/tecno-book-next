import { CategoriesContent } from "../components/categories-page";
import Loading from "../components/loading";

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

export default Categories;
