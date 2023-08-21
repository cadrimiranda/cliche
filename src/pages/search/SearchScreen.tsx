import { Page } from "../../components/page/Page";
import { SearchHeader } from "./component/SearchHeader";

export const SearchScreen = () => {
  return (
    <Page header={false}>
      <SearchHeader />
    </Page>
  );
};
