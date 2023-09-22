import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useMemo, useState } from "react";
import { getSearchHeaderStyles } from "./searchStyles";
import { SearchHeaderEyeIcon } from "./SearchHeaderEyeIcon";

type SearchHeaderProps = {
  search?: string,
  handleSearch: (newSearch: string) => void
}

export const SearchHeader = ({ handleSearch, search = '' }: SearchHeaderProps) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchInteract = () => {
    setIsSearching(true);
  }

  const { background, backgroundSearch, gridOut } = useMemo(() => getSearchHeaderStyles(), []);

  return (
    <Box
      sx={isSearching ? backgroundSearch : background}
    >
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
      <Grid2 container flexDirection="row" alignItems="center" justifyContent="space-between">
        {
          isSearching ? (
            <IconButton onClick={() => setIsSearching(false)} color="secondary">
              <ArrowBack />
            </IconButton>
          ) : null
        }
        <TextField
          placeholder="Pesquise aqui"
          sx={{ mt: isSearching ? '0' : "14px" }}
          color="secondary"
          onClick={handleSearchInteract}
          onFocus={handleSearchInteract}
          onChange={evt => handleSearch(evt.target.value)}
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
  );
};
