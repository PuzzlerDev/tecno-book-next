import { getServerSideProps } from '../../lib/api';
import { CategoryCover } from "../../components/category-page";

const Category = ({category}) => {
  console.log(category)
  return(
    <>
      <CategoryCover />
    </>
  )    
};


Category.getInitialProps = async(ctx) => {
  const category = await getServerSideProps(`categories/1`);
  console.log(ctx)

  return {
    category
  }
}

export default Category; 