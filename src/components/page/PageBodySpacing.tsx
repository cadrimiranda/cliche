import Box from "@mui/material/Box";
import { forwardRef } from "react";

export const PageBodySpacing = forwardRef<HTMLDivElement, { children: any }>(
  ({ children }, ref) => {
    return (
      <Box ref={ref} sx={{ mx: "24px" }}>
        {children}
      </Box>
    );
  }
);
