import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { forwardRef, useMemo, useState } from "react";
import { getSearchHeaderStyles } from "./searchStyles";
import { SearchHeaderEyeIcon } from "./SearchHeaderEyeIcon";
import { SearchTabs } from "../SearchTabs";

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

type SearchHeaderProps = {
  search?: string;
  handleSearch: (newSearch?: string) => void;
  handleFilter: (newFilter: SearchFilter) => void;
  filter: SearchFilter;
};

export const SearchHeader = forwardRef<HTMLDivElement, SearchHeaderProps>(
  ({ handleSearch, handleFilter, filter, search }, ref) => {
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
          sx={{
            mt: "24px",
          }}
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
          <Grid2
            container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end"
            flexWrap="nowrap"
            sx={isSearching ? gridOut : {}}
          >
            <Typography
              color={(t) => t.clicheTheme.colors.buttons.active}
              variant="h1"
              sx={{
                width: "50%",
              }}
            >
              QUEM PROCURA ACHA
            </Typography>
            <SearchHeaderEyeIcon />
          </Grid2>
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
            <TextField
              placeholder="Pesquise aqui"
              sx={{ mt: isSearching ? "0" : "14px" }}
              color="secondary"
              onClick={handleSearchInteract}
              onFocus={handleSearchInteract}
              onChange={(evt) => handleSearch(evt.target.value)}
              value={search}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid2>
        </Box>
        {TabComponent}
      </Box>
    );
  }
);
