import { BookList } from "../../home/components/BookList";
import {
  fictionAndAction,
  lastSeemBooks,
  newBooks,
  top10,
  youMayLike,
} from "../../home/assets/booksLists";
import { SxProps, Theme } from "@mui/material";
import { OverflowBox } from "../../../components/overflowBox/OverflowBox";

export const MySavedLists = ({ sx }: { sx?: SxProps<Theme> }) => {
  return (
    <OverflowBox sx={sx}>
      <BookList
        listTitle="Os opostos se atraem"
        books={fictionAndAction}
        chips={["20.678 seguidores"]}
      />
      <BookList
        listTitle="Amor, amor e amor"
        books={top10}
        chips={["12 seguidores"]}
      />
      <BookList
        listTitle="Prepara o lencinho de papel"
        books={lastSeemBooks}
        chips={["982 seguidores", "Em alta"]}
      />
      <BookList
        sx={{ marginBottom: "20px" }}
        listTitle="Hentai"
        books={newBooks}
        chips={["1.568.982 seguidores"]}
      />
      <BookList
        listTitle="O final que você sempre desejou"
        books={youMayLike}
        chips={["132 seguidores"]}
      />
    </OverflowBox>
  );
};
