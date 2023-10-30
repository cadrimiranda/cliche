// import Box from "@mui/material/Box";
import { PageBodySpacing } from "../../components/page/PageBodySpacing";
import { MyListHeader, MyListsSearchFilter } from "./components/Header";
import { useEffect, useRef, useState } from "react";
import { YourLists } from "./components/YourLists";
import { MySavedLists } from "./components/SavedLists";
import { MyHighlightsLists } from "./components/MyHighlightsLists";

export const MyListsScreen = () => {
  const [maxHeight, setMaxHeight] = useState("");
  const refHeader = useRef<HTMLDivElement>(null);
  const refPage = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<MyListsSearchFilter>(
    MyListsSearchFilter.YOURS
  );

  useEffect(() => {
    setTimeout(() => {
      if (refPage.current && refHeader.current && !maxHeight) {
        const pageHeight = refPage.current.parentElement?.clientHeight || 0;
        const headerHeight = refHeader.current.clientHeight;
        setMaxHeight(`${pageHeight - headerHeight}px`);
      }
    });
  }, []);

  const renderLists = () => {
    switch (filter) {
      case MyListsSearchFilter.YOURS:
        return <YourLists sx={{ maxHeight }} />;
      case MyListsSearchFilter.SAVED:
        return <MySavedLists sx={{ maxHeight }} />;
      case MyListsSearchFilter.HIGHLIGHTS:
        return <MyHighlightsLists sx={{ maxHeight }} />;
      default:
        <div />;
    }
  };

  return (
    <PageBodySpacing ref={refPage}>
      <MyListHeader ref={refHeader} handleFilter={setFilter} filter={filter} />
      {renderLists()}
    </PageBodySpacing>
  );
};
