import { SxProps, Theme } from "@mui/material";

export type PropsWithChildren<P = any> = P & { children?: React.ReactNode };

export type PropsWithSX<P = any> = P & {
  sx?: SxProps<Theme>;
};
