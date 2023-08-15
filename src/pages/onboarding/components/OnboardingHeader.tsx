import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { ClicheDropIcon } from "../../login/components/LoginHeader";

export const OnboardingHeader = (): JSX.Element => (
  <Grid
    sx={{ height: "115px", marginBottom: "60px" }}
    spacing={1}
    container
    flexDirection="row"
    flexWrap="nowrap"
  >
    <Box>
      <Typography
        component="h1"
        variant="h1"
        color={(theme) => theme.palette.text.primary}
      >
        O que você curte ler?
      </Typography>
      <Typography component="h2">Selecione pelo menos 3 opções.</Typography>
    </Box>
    <ClicheDropIcon />
  </Grid>
);
