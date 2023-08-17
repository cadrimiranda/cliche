import { Page } from "../../components/page/Page";
import { BookHighlight } from "./components/BookHighlight";
import { BookList } from "./components/BookList";

export const HomeScreen = () => {
  return (
    <Page>
      <BookHighlight />
      <BookList />
    </Page>
  );
};
