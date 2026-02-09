import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/index.ts";
import { CssBaseline } from "@mui/material";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";

import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
