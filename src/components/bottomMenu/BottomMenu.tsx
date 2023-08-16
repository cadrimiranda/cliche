import { IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import BookmarkIcon from "@mui/icons-material/Bookmarks";
import ProfileIcon from "@mui/icons-material/Portrait";

export const BottomMenu = () => {
  return (
    <Grid
      sx={{ padding: "16px 32px" }}
      container
      justifyContent="space-between"
    >
      <IconButton color="secondary">
        <HomeIcon />
      </IconButton>
      <IconButton color="secondary">
        <SearchIcon />
      </IconButton>
      <IconButton color="secondary">
        <AddIcon />
      </IconButton>
      <IconButton color="secondary">
        <BookmarkIcon />
      </IconButton>
      <IconButton color="secondary">
        <ProfileIcon />
      </IconButton>
    </Grid>
  );
};
