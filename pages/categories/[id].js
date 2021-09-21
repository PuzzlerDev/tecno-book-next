import { CategoryCover, CategoryBooks } from "../../components/category-page";

const Category = ({category}) => {
  return category?.id?(
    <>
      <CategoryCover category={category} />
      <CategoryBooks books={category.books} />
    </>
  ): null;    
};


export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE + context.resolvedUrl)
  const category = await res.json()

  // Pass data to the page via props
  return {
    props: {
      category
    }
  };
};

export default Category; 