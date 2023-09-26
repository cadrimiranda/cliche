import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";

type Props = {
  sx?: SxProps<Theme>;
  sxTitle?: SxProps<Theme>;
  title: string;
  children: any;
};

const SearchHeaderTitle = ({ sx, sxTitle, title, children }: Props) => {
  return (
    <Grid2
      container
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-end"
      flexWrap="nowrap"
      sx={sx}
    >
      <Typography
        color={(t) => t.clicheTheme.colors.buttons.active}
        variant="h1"
        sx={{
          width: "50%",
          ...sxTitle,
        }}
      >
        {title.toUpperCase()}
      </Typography>
      {children}
    </Grid2>
  );
};

export { SearchHeaderTitle };
