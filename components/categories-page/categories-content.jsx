import StyledImage from "../styled-image";
import NavLink from "../nav-link";
import Styles from "../../styles/categories-styles/categories-content.module.css";
import Loading from "../loading";

const CategoriesContent = ({ categories }) => {
  const contents = Object.values(categories);

  return contents.length ? (
    <section className="container py-5">
        <div className="row justify-content-center">
          <h1 className="text-center mb-4">CATEGORIAS</h1>
          {contents.map((item) => {
            const { categoryPicture, categoryTitle, id } = item;
            return (
              <figure key={id} className="col-12 col-sm-6 col-lg-4 text-center">
                <NavLink href={`/categories/${id}`}>
                  <StyledImage
                    src={categoryPicture.url}
                    alt={categoryPicture.alternativeText}
                  />
                  <figcaption className={Styles["card-name"]}>
                    {categoryTitle}
                  </figcaption>
                </NavLink>
              </figure>
            );
          })}
        </div>
    </section>
  ) : (
    <Loading />
  );
};

export default CategoriesContent;
