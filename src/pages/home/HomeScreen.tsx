import { Page } from "../../components/page/Page";
import {
  lastSeemBooks,
  fictionAndAction,
  top10,
  youMayLike,
  newBooks,
} from "./assets/booksLists";
import { BookHighlight } from "./components/BookHighlight";
import { BookList } from "./components/BookList";

export const HomeScreen = () => {
  return (
    <Page>
      <BookHighlight />
      <BookList listTitle="Últimos vistos" books={lastSeemBooks} />
      <BookList
        listTitle="Pra quem curte ficção e aventura"
        books={fictionAndAction}
      />
      <BookList listTitle="Top 10 mais lidos" books={top10} />
      <BookList listTitle="Adaptações que você gosta" books={youMayLike} />
      <BookList
        sx={{ marginBottom: "20px" }}
        listTitle="Novas histórias"
        books={newBooks}
      />
    </Page>
  );
};
