import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BookListItem } from "./BookListItem";

export const BookList = () => {
  const books = [1, 2, 3, 4];

  return (
    <Box>
      <Typography>Últimos vistos</Typography>
      {books.map((book) => (
        <BookListItem key={book} />
      ))}
    </Box>
  );
};
