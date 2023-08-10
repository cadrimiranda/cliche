import TextField from "@mui/material/TextField";
import ClicheThemeProvider from "./theme/ClicheThemeProvider";
import Button from "@mui/material/Button";

function App() {
  return (
    <ClicheThemeProvider>
      <Button disabled title="Large" size="large">
        large
      </Button>
      <Button variant="outlined" title="Large" size="medium">
        medium
      </Button>
      <Button title="Large" size="small">
        small
      </Button>
      <TextField label="Text Field" disabled />
      <TextField label="Text Field" />
    </ClicheThemeProvider>
  );
}

export default App;
