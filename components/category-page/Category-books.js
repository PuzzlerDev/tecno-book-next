import NavLink from "../Nav-link";
import StyledImage from "../Styled-image";

const CategoryBooks = ({books}) => {
  return books ? (
    <section>
      <article className="container p-5">
        <div className="row">
          {books.map(book => {
            const {id, bookTitle, bookPicture} = book;
            return(
                <div key={id} className="col-12 col-md-6 col-lg-4">
                    <NavLink href={`/books/${id}`}>
                    <h3 className="text-center">{bookTitle}</h3>
                    <StyledImage 
                      src={bookPicture.url} 
                      alt={bookPicture.alternativeText}
                      height={300} 
                    />
                    </NavLink>
                </div>
            )
            })}
        </div>
      </article>
    </section>
  ): null    
};

export default CategoryBooks;