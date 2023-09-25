import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useCallback } from "react";
import { SearchListTitles } from "./SearchListTitles";
import { SearchMultiLineLists } from "./SearchMultiLineLists";
import { SearchByUser } from "./SearchByUser";
import { SearchFilter } from "./header/SearchHeader";
import { SxProps, Theme } from "@mui/material";

type SearchResultListProps = {
  filter?: SearchFilter;
  sx?: SxProps<Theme>;
};

export const SearchResultList = ({ filter, sx }: SearchResultListProps) => {
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

  return (
    <Box sx={{ mt: "32px", overflowX: "hidden", overflowY: "scroll", ...sx }}>
      {getRenderList()}
    </Box>
  );
};
