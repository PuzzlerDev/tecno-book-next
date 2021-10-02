import StyledImage from "../Styled-image";
import NavLink from "../Nav-link";
import Styles from "../../styles/categories-styles/Categories-content.module.css";
import Loading from "../Loading";

const CategoriesContent = ({ categories }) => {
  const contents = Object.values(categories);

  return contents.length ? (
    <section>
      <article className="container pb-5">
        <div className="row justify-content-center">
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
      </article>
    </section>
  ) : (
    <Loading />
  );
};

export default CategoriesContent;
