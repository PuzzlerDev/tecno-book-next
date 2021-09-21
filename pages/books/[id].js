import { BookContent } from "../../components/book-page";

const Book = ({ book }) => {
  return book?.id?(
    <>
      <BookContent book={book} />
    </>
  ): null;    
};


export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE + context.resolvedUrl)
  const book = await res.json()

  // Pass data to the page via props
  return {
    props: {
      book
    }
  };
};

export default Book; 