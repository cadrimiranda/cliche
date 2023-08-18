import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BookItem, BookListItem } from "./BookListItem";

type BookListProps = {
  books: BookItem[];
  listTitle: string;
};

export const BookList = ({ books, listTitle }: BookListProps) => {
  return (
    <Box sx={{ mt: "20px", ml: "24px" }}>
      <Typography
        color={(theme) => theme.clicheTheme.colors.text.title}
        variant="h6"
      >
        {listTitle}
      </Typography>
      <Box
        component="ul"
        sx={{
          display: "flex",
          m: "10px 0 0",
          p: 0,
          overflowX: "auto",
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {books.map((book) => (
          <BookListItem book={book} />
        ))}
      </Box>
    </Box>
  );
};
