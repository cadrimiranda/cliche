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
import { OverflowBox } from "../../../components/overflowBox/OverflowBox";

export const YourLists = ({ sx }: { sx?: SxProps<Theme> }) => {
  const handleEdit = () => {
    console.log("editing list");
  };

  const handleAdd = () => {
    console.log("adding list");
  };

  return (
    <OverflowBox sx={sx}>
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
    </OverflowBox>
  );
};
