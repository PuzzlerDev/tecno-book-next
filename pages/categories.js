import { CategoriesContent }from "../components/categories-page";
import Loading from "../components/Loading";

const Categories = ({categories}) => {
    console.log(categories)
    return categories?.length?(
        <>
            <CategoriesContent categories={categories}/>
        </>
    ): <Loading />    
};

export default Categories; 
