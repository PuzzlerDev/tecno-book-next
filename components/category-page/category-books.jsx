import NavLink from "../nav-link";
import Styles from "../../styles/category-styles/category-books.module.css";
import Loading from "../loading";
import {Card, Button} from "react-bootstrap";
import StyledImage from "../styled-image";

const CategoryBooks = ({ books }) => {
  return books.length ? (
    <section className="container pb-5">
        <div className="row">
          {books.map((book) => {
            const { id, bookTitle, bookInfo, bookLink, bookAuthor, bookPicture } = book;
            return (
              <Card key={id} className="col-12 col-md-6 col-lg-4 col-xl-3 mx-auto">
                <StyledImage src={bookPicture.url} height={500} width={400}/>
                <Card.Body>
                  <Card.Title className="text-center">{bookTitle}</Card.Title>
                  <Card.Text className="text-end mt-4 mb-4">
                    Autor/a: {bookAuthor}
                  </Card.Text>
                  <hr/>
                  <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
    </section>
  ) : <Loading/>;
};

export default CategoryBooks;
