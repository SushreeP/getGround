import { Card } from "@mui/material";

const Book = ({ book }) => {
  const listAuthors = (authors) => {
    return (
      <>
        {authors.map((authName, id) => {
          if (id === authors.length - 1) {
            return <span key={id}>{authName}</span>;
          }
          return <span key={id}>{authName},</span>;
        })}
      </>
    );
  };
  return (
    <Card variant="outlined">
      <p>Title : {book.book_title}</p>
      <p>Authors :{listAuthors(book.book_author)}</p>
      <p>Pages : {book.book_pages}</p>
      <p>Country : {book.book_publication_country}</p>
      <p>Year : {book.book_publication_year}</p>
    </Card>
  );
};

export default Book;
