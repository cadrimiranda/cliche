import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BookItem, BookListItem } from "./BookListItem";
import { SxProps, Theme } from "@mui/material/styles";

type BookListProps = {
  books: BookItem[];
  listTitle: string;
  sx?: SxProps<Theme>;
};

export const BookList = ({ books, listTitle, sx }: BookListProps) => {
  return (
    <Box sx={{ mt: "20px", ml: "24px", ...sx }}>
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
          overflowY: "hidden",
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
