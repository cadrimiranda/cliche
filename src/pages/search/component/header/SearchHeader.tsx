import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { forwardRef, useMemo, useState } from "react";
import { getSearchHeaderStyles } from "./searchStyles";
import { SearchHeaderEyeIcon } from "./SearchHeaderEyeIcon";
import { SearchTabs } from "../SearchTabs";
import { SearchHeaderTitle } from "./SearchHeaderTitle";
import { SearchHeaderInput } from "./SearchHeaderInput";

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

export type SearchHeaderProps<F> = {
  search?: string;
  handleSearch: (newSearch?: string) => void;
  handleFilter: (newFilter: F) => void;
  filter: F;
};

export const SearchHeader = forwardRef<
  HTMLDivElement,
  SearchHeaderProps<SearchFilter>
>(({ handleSearch, handleFilter, filter, search }, ref) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchInteract = () => {
    setIsSearching(true);
  };

  const handleStopSearch = () => {
    setIsSearching(false);
    handleSearch("");
  };

  const TabComponent = useMemo(() => {
    if (!search) {
      return <></>;
    }

    return (
      <SearchTabs<SearchFilter>
        tabSelected={filter}
        tabs={options}
        handleChange={handleFilter}
      />
    );
  }, [search, filter, handleFilter]);

  const { background, backgroundSearch, gridOut } = useMemo(
    () => getSearchHeaderStyles(),
    []
  );

  return (
    <Box ref={ref}>
      <Box sx={isSearching ? backgroundSearch : background}>
        <SearchHeaderTitle
          title="QUEM PROCURA ACHA"
          sx={isSearching ? gridOut : {}}
        >
          <SearchHeaderEyeIcon />
        </SearchHeaderTitle>
        <Grid2
          container
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {isSearching ? (
            <IconButton onClick={handleStopSearch} color="secondary">
              <ArrowBack />
            </IconButton>
          ) : null}
          <SearchHeaderInput
            sx={{ mt: isSearching ? "0" : "14px" }}
            onClick={handleSearchInteract}
            onFocus={handleSearchInteract}
            onChange={(evt) => handleSearch(evt.target.value)}
            value={search}
          />
        </Grid2>
      </Box>
      {TabComponent}
    </Box>
  );
});
