import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { defaultTheme } from "@app/styles/themes"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./App.routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
