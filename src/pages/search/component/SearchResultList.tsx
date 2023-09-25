import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SearchFilter } from "../SearchScreen";
import { useCallback } from "react";
import { SearchListTitles } from "./SearchListTitles";
import { SearchMultiLineLists } from "./SearchMultiLineLists";
import { SearchByUser } from "./SearchByUser";

type SearchResultListProps = {
  filter?: SearchFilter;
};

export const SearchResultList = ({ filter }: SearchResultListProps) => {
  const getRenderList = useCallback(() => {
    switch (filter) {
      case SearchFilter.title:
        return <SearchListTitles />;
      case SearchFilter.category:
        return <SearchMultiLineLists filter={filter} />;
      case SearchFilter.lists:
        return <SearchMultiLineLists filter={filter} />;
      case SearchFilter.users:
        return <SearchByUser />;
      default:
        return (
          <Box>
            <Typography variant="h6">Principais buscas</Typography>
            <SearchListTitles />
          </Box>
        );
    }
  }, [filter]);

  return <Box sx={{ mt: "32px" }}>{getRenderList()}</Box>;
};
