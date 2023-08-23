import Box from "@mui/material/Box";
import { SearchHeader } from "./component/SearchHeader";
import { SearchResultList } from "./component/SearchResultList";

export const SearchScreen = () => {
  return (
    <Box>
      <SearchHeader />
      <SearchResultList />
    </Box>
  );
};
