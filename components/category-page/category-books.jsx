import NavLink from "../nav-link";
import Styles from "../../styles/category-styles/category-books.module.css";

const CategoryBooks = ({ books }) => {
  return books ? (
    <section className="container pb-5">
        <div className="row">
          {books.map((book) => {
            const { id, bookTitle, bookInfo, bookLink } = book;
            return (
              <div key={id} className={`${Styles['book-card']} card col-12 col-md-6 col-lg-4`}>
                  <div className="card-body mx-auto px-3">
                    <h3 className="text-center">{bookTitle}</h3>
                    <p className="card-text mb-3">
                      {bookInfo}
                    </p>
                    <NavLink href={bookLink} bg="green" cta targetBlank>
                      Descargar
                    </NavLink>
                  </div>
              </div>
            );
          })}
        </div>
    </section>
  ) : null;
};

export default CategoryBooks;
