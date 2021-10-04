import NavLink from "../nav-link";
import StyledImage from "../styled-image";

const CategoryBooks = ({ books }) => {
  return books ? (
    <section>
      <article className="container p-5">
        <div className="row">
          {books.map((book) => {
            const { id, bookTitle, bookPicture } = book;
            return (
              <div key={id} className="col-12 col-md-6 col-lg-4">
                <NavLink href={`/books/${id}`} color="black">
                  <h3 className="text-center">{bookTitle}</h3>
                  <StyledImage
                    src={bookPicture.url}
                    alt={bookPicture.alternativeText}
                  />
                </NavLink>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  ) : null;
};

export default CategoryBooks;
