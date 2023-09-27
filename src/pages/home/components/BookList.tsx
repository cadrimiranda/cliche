import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Chip from "@mui/material/Chip";
import EditIcon from "@mui/icons-material/EditOutlined";
import { BookItem, BookListItem } from "./BookListItem";
import { SxProps, Theme } from "@mui/material/styles";

type BookListProps = {
  books: BookItem[];
  listTitle: string;
  sx?: SxProps<Theme>;
  chips?: Array<string>;
  onEdit?: () => void;
};

export const BookListTitle = ({
  listTitle,
}: Pick<BookListProps, "listTitle">) => (
  <Typography
    color={(theme) => theme.clicheTheme.colors.text.title}
    variant="h6"
    mb={1}
  >
    {listTitle}
  </Typography>
);

export const BookList = ({
  books,
  listTitle,
  sx,
  chips,
  onEdit,
}: BookListProps) => {
  return (
    <Box sx={{ mb: "20px", ...sx }}>
      <Grid2 container justifyContent="space-between">
        <BookListTitle listTitle={listTitle} />
        <Box>
          {onEdit ? (
            <IconButton size="small" onClick={onEdit} color="secondary">
              <EditIcon />
            </IconButton>
          ) : null}
        </Box>
      </Grid2>
      {chips ? (
        <Grid2>
          {chips.map((chip) => (
            <Chip size="small" color="info" label={chip} sx={{ mr: "3px" }} />
          ))}
        </Grid2>
      ) : null}
      <Box
        component="ul"
        sx={{
          display: "flex",
          mt: "10px",
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
