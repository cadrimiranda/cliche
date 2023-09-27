// import Box from "@mui/material/Box";
import { PageBodySpacing } from "../../components/page/PageBodySpacing";
import { MyListHeader, MyListsSearchFilter } from "./components/Header";
import { useRef, useState } from "react";
import { YourLists } from "./components/YourLists";

export const MyListsScreen = () => {
  const refHeader = useRef<HTMLDivElement>(null);
  const refPage = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<MyListsSearchFilter>(
    MyListsSearchFilter.YOURS
  );
  let maxHeight = "";

  if (refPage.current && refHeader.current) {
    const pageHeight = refPage.current.parentElement?.clientHeight || 0;
    const headerHeight = refHeader.current.clientHeight;
    maxHeight = `${pageHeight - headerHeight}px`;
  }

  return (
    <PageBodySpacing ref={refPage}>
      <MyListHeader ref={refHeader} handleFilter={setFilter} filter={filter} />
      <YourLists sx={{ maxHeight }} />
    </PageBodySpacing>
  );
};
