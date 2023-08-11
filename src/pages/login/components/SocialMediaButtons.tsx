import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstaIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { svgIconClasses } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const sx = {
  width: "70px",
  height: "70px",
  [`.${svgIconClasses.root}`]: {
    width: "35px",
    height: "35px",
  },
};

export const SocialMediaButtons = () => {
  return (
    <Grid spacing={1} container justifyContent="space-between">
      <IconButton sx={sx}>
        <GoogleIcon />
      </IconButton>
      <IconButton sx={sx}>
        <FacebookIcon />
      </IconButton>
      <IconButton sx={sx}>
        <InstaIcon />
      </IconButton>
      <IconButton sx={sx}>
        <TwitterIcon />
      </IconButton>
    </Grid>
  );
};
