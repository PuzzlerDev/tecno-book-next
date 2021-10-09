import StyledImage from "../styled-image";
import NavLink from "../nav-link";

const BookContent = ({ book }) => {
  return book ? (
    <section>
      <article className="container p-3">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 ">
            {book.bookPicture && (
              <StyledImage 
                src={book.bookPicture.url} 
                alt={book.bookPicture.alternativeText}
              />)
            }
          </div>

          <div className="col-12 col-md-6 text-center text-md-start">
            <h1>{book.bookTitle}</h1>
            <p>{book.bookInfo}</p>
            {book.bookSpanishLink && (
              <NavLink href={book.bookSpanishLink} target="_blank" cta>
                Descarga en Espanol
                {console.log(book.bookSpanishLink)}
              </NavLink>
            )}
            {book.bookEnglishLink && (
              <NavLink href={book.bookEnglishLink} target="_blank" cta>
                Download PDF
              </NavLink>
            )}
          </div>
        </div>
      </article>
    </section>
  ) : null;
};

export default BookContent;
