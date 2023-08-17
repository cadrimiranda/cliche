import Box from "@mui/material/Box";
import { BottomMenu } from "../bottomMenu/BottomMenu";
import { HeaderMenu } from "../headerMenu/HeaderMenu";
import { useRef } from "react";
import { PropsWithChildren } from "../../shared/types";

export const Page = ({ children }: PropsWithChildren) => {
  const refHeader = useRef<HTMLDivElement>(null);
  const refBottom = useRef<HTMLDivElement>(null);

  const getMaxHeight = () => {
    return `calc(100% - ${refHeader.current?.clientHeight}px - ${refBottom.current?.clientHeight}px)`;
  };

  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <HeaderMenu ref={refHeader} />
      <Box
        sx={{
          overflow: "auto",
          maxWidth: "100vw",
          maxHeight: getMaxHeight(),
          overflowX: "hidden",
        }}
      >
        {children}
      </Box>
      <BottomMenu ref={refBottom} />
    </Box>
  );
};
