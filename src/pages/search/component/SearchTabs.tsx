import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box, { BoxProps } from "@mui/material/Box";
import { ClicheTabClassNames } from "../../../app/theme/overrides/TabMenu";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type SearchTabsProps<TabType> = {
  tabSelected?: TabType;
  handleChange: (newTab: TabType) => void;
  tabs: Array<{ tabType: TabType; label: string }>;
  sx?: BoxProps["sx"];
};

export const SearchTabs = <TabType,>({
  tabSelected,
  handleChange,
  tabs,
  sx,
}: SearchTabsProps<TabType>) => {
  return (
    <Box sx={{ my: "24px", ...sx }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabSelected}
          onChange={(_, tab) => handleChange(tab)}
          aria-label="basic tabs example"
          className={ClicheTabClassNames.searchMenu}
          variant="fullWidth"
        >
          {tabs.map((tab) => (
            <Tab
              value={tab.tabType}
              key={String(tab.tabType)}
              label={tab.label}
              {...a11yProps(0)}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};
