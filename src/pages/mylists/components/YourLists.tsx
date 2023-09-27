import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import { BookList, BookListTitle } from "../../home/components/BookList";
import {
  fictionAndAction,
  lastSeemBooks,
  newBooks,
  top10,
  youMayLike,
} from "../../home/assets/booksLists";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { bookListItemCardStyle } from "../../home/components/BookListItem";
import { SxProps, Theme } from "@mui/material";

export const YourLists = ({ sx }: { sx?: SxProps<Theme> }) => {
  const handleEdit = () => {
    console.log("editing list");
  };

  const handleAdd = () => {
    console.log("adding list");
  };

  return (
    <Box sx={{ overflowX: "hidden", overflowY: "scroll", ...sx }}>
      <Grid2 sx={{ mb: "20px" }}>
        <BookListTitle listTitle="Crie uma nova lista" />
        <Box
          onClick={handleAdd}
          sx={{
            ...bookListItemCardStyle,
            border: "none",
            borderRadius: "8px",
            mt: "10px",
          }}
          component="button"
        >
          <AddIcon fontSize="large" color="action" />
        </Box>
      </Grid2>
      <BookList
        onEdit={handleEdit}
        listTitle="Prepara o lencinho de papel"
        books={lastSeemBooks}
        chips={["982 seguidores", "Em alta"]}
      />
      <BookList
        onEdit={handleEdit}
        listTitle="Os opostos se atraem"
        books={fictionAndAction}
        chips={["20.678 seguidores"]}
      />
      <BookList
        onEdit={handleEdit}
        listTitle="Amor, amor e amor"
        books={top10}
        chips={["12 seguidores"]}
      />
      <BookList
        onEdit={handleEdit}
        listTitle="O final que você sempre desejou"
        books={youMayLike}
        chips={["132 seguidores"]}
      />
      <BookList
        onEdit={handleEdit}
        sx={{ marginBottom: "20px" }}
        listTitle="Hentai"
        books={newBooks}
        chips={["1.568.982 seguidores"]}
      />
    </Box>
  );
};
