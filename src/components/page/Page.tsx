import Box from "@mui/material/Box";
import { BottomMenu } from "../bottomMenu/BottomMenu";
import { HeaderMenu } from "../headerMenu/HeaderMenu";
import { useEffect, useRef, useState } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { PropsWithChildren } from "../../shared/types";

type PageProps = {
  header?: boolean;
  sx?: SxProps<Theme>;
};

export const Page = ({
  children,
  sx,
  header = true,
}: PropsWithChildren<PageProps>) => {
  const refHeader = useRef<HTMLDivElement>(null);
  const refBottom = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    const headerHeight = header ? refHeader.current?.clientHeight : 0;
    setHeight(
      `calc(100% - ${headerHeight}px - ${refBottom.current?.clientHeight}px)`
    );
  }, [header]);

  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      {header && <HeaderMenu ref={refHeader} />}
      <Box
        sx={{
          overflow: "auto",
          maxWidth: "100vw",
          maxHeight: height,
          overflowX: "hidden",
          "::-webkit-scrollbar": { display: "none" },
          ...sx,
        }}
      >
        {children}
      </Box>
      <BottomMenu ref={refBottom} />
    </Box>
  );
};
