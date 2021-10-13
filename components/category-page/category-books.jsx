import NavLink from "../nav-link";
import Styles from "../../styles/category-styles/category-books.module.css";

const CategoryBooks = ({ books }) => {
  return books ? (
    <section className="container pb-5">
        <div className="row">
          {books.map((book) => {
            const { id, bookTitle, bookInfo, bookLink, bookAuthor } = book;
            return (
              <div key={id} className={`${Styles['book-card']} card col-12 col-md-6 col-lg-4 mx-auto`}>
                  <div className="card-body mx-auto px-2">
                    <h3 className="text-center">{bookTitle}</h3>
                    <p className="card-text mb-3">
                      {bookInfo}
                    </p>
                    <p>
                      {bookAuthor}
                    </p>
                    <div className="d-flex justify-content-end">
                      <NavLink 
                        href={bookLink} 
                        bg="green" 
                        cta 
                        target="_blank" 
                        className={Styles['book-link']}
                      >
                        Descargar
                      </NavLink>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
    </section>
  ) : null;
};

export default CategoryBooks;
