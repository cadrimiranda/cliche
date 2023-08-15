import Box from "@mui/material/Box";
import { OnboardingHeader } from "./components/OnboardingHeader";
import { OnboardingCategoryList } from "./components/OnboardingCategoryList";
import { Button } from "@mui/material";

export const OnboardingScreen = (): JSX.Element => {
  return (
    <Box
      sx={{
        padding: "44px 32px",
      }}
    >
      <OnboardingHeader />
      <OnboardingCategoryList />
      <Button sx={{ width: "100%" }}>{"Pronto"}</Button>
    </Box>
  );
};
