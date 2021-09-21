import StyledImage from "../Styled-image";

const BookContent = ({book}) => {

    return book ? (
        <section>
            <article className="container p-3">
                <div className="row align-items-center">
                <div className="col-12 col-md-6 ">
                        {book.bookPicture && (
                            <StyledImage src={book.bookPicture.url}/>
                        )}
                    </div>
                    
                    <div className="col-12 col-md-6 text-center text-md-start">
                       <h1>
                           {book.bookTitle}
                       </h1>
                       <p>
                           {book.bookInfo}
                       </p>
                       {book.bookSpanishLink && (
                        <a href={book.bookSpanishLink} target="_blank">
                        Descarga en Espanol
                        {console.log(book.bookSpanishLink)}
                        </a>
                       )}
                       {book.bookEnglishLink && (
                        <a href={book.bookEnglishLink} target="_blank">
                        Descarga en Ingles
                        </a>
                       )}
                    </div>
                </div>
            </article>
        </section>
    ):<h1>Loading</h1>    
};

export default BookContent;