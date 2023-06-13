import { Button } from "../components/button";
import ClicheThemeProvider from "./theme/ClicheThemeProvider";

function App() {
  return (
    <ClicheThemeProvider>
      <Button title="Cliche">Salve</Button>
    </ClicheThemeProvider>
  );
}

export default App;
