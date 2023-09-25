import Box from "@mui/material/Box";
import { SearchFilter, SearchHeader } from "./component/header/SearchHeader";
import { SearchResultList } from "./component/SearchResultList";
import { useRef, useState } from "react";

export const SearchScreen = () => {
  const refHeader = useRef<HTMLDivElement>(null);
  const refPage = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState<string>();
  const [filter, setFilter] = useState<SearchFilter>(SearchFilter.title);
  let maxHeight = "";

  if (refPage.current && refHeader.current) {
    const pageHeight = refPage.current.parentElement?.clientHeight || 0;
    const headerHeight = refHeader.current.clientHeight;
    maxHeight = `${pageHeight - headerHeight}px`;
  }

  return (
    <Box ref={refPage} sx={{ mx: "24px" }}>
      <SearchHeader
        ref={refHeader}
        handleSearch={setSearch}
        handleFilter={setFilter}
        filter={filter}
        search={search}
      />
      <SearchResultList
        sx={{ maxHeight }}
        filter={search ? filter : undefined}
      />
    </Box>
  );
};
