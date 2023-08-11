import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="cliche-tabpabel"
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const LoginTabMenu = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        ".cliche-tabpabel": {
          marginTop: "10px",
        },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="login or register tab"
        sx={{
          marginTop: "48px",
          marginBottom: "38px",
          [`.${tabsClasses.scroller}`]: {
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <Tab label="Login" {...a11yProps(0)} />
        <Tab label="Cadastrar" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <LoginForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RegisterForm />
      </TabPanel>
    </Box>
  );
};
