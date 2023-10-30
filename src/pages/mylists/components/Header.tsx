import Box from "@mui/material/Box";
import { useState, useMemo, forwardRef } from "react";
import { SearchHeaderTitle } from "../../search/component/header/SearchHeaderTitle";
import { MyListHeaderIcon } from "./HeaderIcon";
import { SearchHeaderInput } from "../../search/component/header/SearchHeaderInput";
import { getSearchHeaderStyles } from "../../search/component/header/searchStyles";
import { SearchTabs } from "../../search/component/SearchTabs";
import { SearchHeaderProps } from "../../search/component/header/SearchHeader";

export enum MyListsSearchFilter {
  YOURS = "your_lists",
  SAVED = "saved_lits",
  HIGHLIGHTS = "highlights_lists",
}
const options = [
  { label: "Suas listas", tabType: MyListsSearchFilter.YOURS },
  { label: "Listas salvas", tabType: MyListsSearchFilter.SAVED },
  { label: "Destaques", tabType: MyListsSearchFilter.HIGHLIGHTS },
];

type Props = Pick<
  SearchHeaderProps<MyListsSearchFilter>,
  "handleFilter" | "filter"
>;

const MyListHeader = forwardRef<HTMLDivElement, Props>(
  ({ filter, handleFilter }, ref) => {
    const [search, setSearch] = useState<string>();
    const { background } = useMemo(() => getSearchHeaderStyles(), []);

    return (
      <Box ref={ref}>
        <Box sx={background}>
          <SearchHeaderTitle title="Quem guarda tem!">
            <MyListHeaderIcon />
          </SearchHeaderTitle>
          <SearchHeaderInput
            sx={{ mt: "14px" }}
            onChange={(evt) => setSearch(evt.target.value)}
            value={search}
          />
        </Box>
        <SearchTabs<MyListsSearchFilter>
          tabSelected={filter}
          tabs={options}
          handleChange={handleFilter}
        />
      </Box>
    );
  }
);

export { MyListHeader };
