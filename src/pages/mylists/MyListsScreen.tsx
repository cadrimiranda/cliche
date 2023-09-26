// import Box from "@mui/material/Box";
import { PageBodySpacing } from "../../components/page/PageBodySpacing";
import { MyListHeader, MyListsSearchFilter } from "./components/Header";
import { useState } from "react";

export const MyListsScreen = () => {
  const [filter, setFilter] = useState<MyListsSearchFilter>(
    MyListsSearchFilter.YOURS
  );

  return (
    <PageBodySpacing>
      <MyListHeader handleFilter={setFilter} filter={filter} />
    </PageBodySpacing>
  );
};
