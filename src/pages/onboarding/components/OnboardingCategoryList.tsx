import { mockCategories } from "../assets/mockCategories";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

export const OnboardingCategoryList = (): JSX.Element => {
  const [selecteds, setSelected] = useState<string[]>([]);

  const handleSelect = (categorie: string) => {
    let newCategories = selecteds;
    if (selecteds.some((x) => x === categorie)) {
      newCategories = selecteds.filter((x) => x != categorie);
    } else {
      newCategories = [...newCategories, categorie];
    }

    setSelected(newCategories);
  };

  return (
    <Grid container justifyContent="space-between">
      {mockCategories.map((cat) => (
        <Chip
          key={cat}
          clickable
          sx={{ marginBottom: "24px" }}
          color={selecteds.some((x) => x === cat) ? "secondary" : "primary"}
          label={cat}
          onClick={() => handleSelect(cat)}
        />
      ))}
    </Grid>
  );
};
