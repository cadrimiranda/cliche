import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BookItem, BookListItem } from "./BookListItem";
import { SxProps, Theme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Chip from "@mui/material/Chip";

type BookListProps = {
  books: BookItem[];
  listTitle: string;
  sx?: SxProps<Theme>;
  chips?: Array<string>;
};

export const BookList = ({ books, listTitle, sx, chips }: BookListProps) => {
  return (
    <Box sx={{ mb: "20px", ...sx }}>
      <Typography
        color={(theme) => theme.clicheTheme.colors.text.title}
        variant="h6"
        mb={1}
      >
        {listTitle}
      </Typography>
      {chips ? (
        <Grid2>
          {chips.map((chip) => (
            <Chip size="small" color="info" label={chip} />
          ))}
        </Grid2>
      ) : null}
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
