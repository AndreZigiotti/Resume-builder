import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { defaultTheme } from "@app/styles/themes"
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material"
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./App.routes";
import { GlobalStyles } from "@app/styles/global";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <GlobalStyles />
        <BrowserRouter>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default App
