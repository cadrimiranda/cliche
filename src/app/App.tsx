import TextField from "@mui/material/TextField";
import { Button } from "../components/button";
import ClicheThemeProvider from "./theme/ClicheThemeProvider";

function App() {
  return (
    <ClicheThemeProvider>
      <Button title="Cliche">Salve</Button>
      <TextField label="Text Field" disabled />
      <TextField label="Text Field" />
    </ClicheThemeProvider>
  );
}

export default App;
