import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export const rootStyles = {
  "#root": {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default theme;
