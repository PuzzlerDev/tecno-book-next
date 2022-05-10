import { InputGroup, Button, FormControl } from "react-bootstrap";
import SearchModal from "./modal";
import { createRef, useState } from "react";
import { API_URL } from "../helpers/constants";
import Styles from "../styles/category-styles/category-books.module.css";
import NavLink from "./nav-link";

const Search = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const inputRef = createRef(null);

  const handleShowResults = async () => {
    if (!inputRef.current.value) return;
    const value = inputRef.current.value;
    const res = await fetch(`${API_URL}/books?bookTitle_containss=${value}`);
    const books = await res.json();
    setData(books); 
    setShow(true);
  }

  return (
    <InputGroup className="mb-3">
      <Button variant="dark" id="button-addon1" onClick={handleShowResults}>
        Search 🔍
      </Button>
      <FormControl
        aria-label="Search a book"
        aria-describedby="Search-book"
        placeholder="Buscar Libro..."
        ref={inputRef}
      />
      <SearchModal show={show} setShow={setShow} totalBooks={data.length}>
      <div className="row">
          {data.map((book) => {
            const { id, bookTitle, bookInfo, bookLink, bookAuthor } = book;
            return (
              <div key={id} className={`${Styles['book-card']} card col-12 col-md-6 col-lg-4 col-xxl-2 mx-auto`}>
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
      </SearchModal>
    </InputGroup>
  );
};

export default Search;
