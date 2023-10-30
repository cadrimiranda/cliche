import Box from "@mui/material/Box";
import { PropsWithChildren, PropsWithSX } from "../../shared/types";

export const OverflowBox = ({
  sx,
  children,
}: PropsWithChildren<PropsWithSX>) => (
  <Box sx={{ overflowX: "hidden", overflowY: "scroll", ...sx }}>{children}</Box>
);
