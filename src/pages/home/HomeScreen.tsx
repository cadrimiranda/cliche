import { Page } from "../../components/page/Page";
import { lastSeemBooks, fictionAndAction } from "./assets/booksLists";
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
    </Page>
  );
};
