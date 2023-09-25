import Box from "@mui/material/Box";
import { SearchHeader } from "./component/header/SearchHeader";
import { SearchResultList } from "./component/SearchResultList";
import { useState, useMemo } from "react";
import { SearchTabs } from "./component/SearchTabs";

export enum SearchFilter {
  title = "title",
  category = "category",
  users = "users",
  lists = "lists",
}

const options = [
  { label: "Títulos", tabType: SearchFilter.title },
  { label: "Categorias", tabType: SearchFilter.category },
  { label: "Usuários", tabType: SearchFilter.users },
  { label: "Listas", tabType: SearchFilter.lists },
];

export const SearchScreen = () => {
  const [search, setSearch] = useState<string>();
  const [filter, setFilter] = useState<SearchFilter>(SearchFilter.title);

  const TabComponent = useMemo(() => {
    if (!search) {
      return <></>;
    }

    return (
      <SearchTabs<SearchFilter>
        tabSelected={filter}
        tabs={options}
        handleChange={setFilter}
        sx={{
          mt: "24px",
        }}
      />
    );
  }, [search, filter, setFilter]);

  return (
    <Box>
      <SearchHeader handleSearch={setSearch} search={search} />
      <Box sx={{ mx: "24px" }}>
        {TabComponent}
        <SearchResultList filter={search ? filter : undefined} />
      </Box>
    </Box>
  );
};
