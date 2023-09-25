import {
  fictionAndAction,
  lastSeemBooks,
  newBooks,
  top10,
  youMayLike,
} from "../../home/assets/booksLists";
import { BookList } from "../../home/components/BookList";
import Box from "@mui/material/Box";
import { SearchFilter } from "../SearchScreen";

type SearchMultiLineListsProps = {
  filter: SearchFilter;
};

export const SearchMultiLineLists = ({ filter }: SearchMultiLineListsProps) => {
  const isLists = filter === SearchFilter.lists;

  return (
    <Box>
      <BookList
        listTitle={isLists ? "Prepara o lencinho de papel" : "Romance"}
        books={lastSeemBooks}
        chips={isLists ? ["982 seguidores", "Em alta"] : undefined}
      />
      <BookList
        listTitle={isLists ? "Os opostos se atraem" : "Ficção e aventura"}
        books={fictionAndAction}
        chips={isLists ? ["20.678 seguidores"] : undefined}
      />
      <BookList
        listTitle={isLists ? "Amor, amor e amor" : "Jovem adulto"}
        books={top10}
        chips={isLists ? ["12 seguidores"] : undefined}
      />
      <BookList
        listTitle={isLists ? "O final que você sempre desejou" : "Adaptação"}
        books={youMayLike}
        chips={isLists ? ["132 seguidores"] : undefined}
      />
      <BookList
        sx={{ marginBottom: "20px" }}
        listTitle={isLists ? "Hentai" : "Comédias Romanticas"}
        books={newBooks}
        chips={isLists ? ["1.568.982 seguidores"] : undefined}
      />
    </Box>
  );
};
