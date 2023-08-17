import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import BookmarkIcon from "@mui/icons-material/Bookmarks";
import ProfileIcon from "@mui/icons-material/Portrait";
import { forwardRef } from "react";

export const BottomMenu = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Grid
      component="div"
      ref={ref}
      sx={{
        padding: "16px 32px",
        position: "absolute",
        width: "100%",
        bottom: "0",
      }}
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
});
