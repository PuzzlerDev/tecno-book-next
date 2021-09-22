import { BookContent } from "../../components/book-page";
import { API_URL } from "../../helpers/constants";
import Loading from "../../components/Loading";

const Book = ({ book }) => {
  return book?.id?(
    <>
      <BookContent book={book} />
    </>
  ): <Loading/>;    
};


export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(API_URL + context.resolvedUrl)
  const book = await res.json()

  // Pass data to the page via props
  return {
    props: {
      book
    }
  };
};

export default Book; 