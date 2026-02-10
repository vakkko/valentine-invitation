import type { SxProps, Theme } from "@mui/material";

export const tableHeaderStyle: SxProps<Theme> = {
  backgroundColor: "#4a90e2",

  tr: {
    display: "flex",
    alignItems: "center",
  },

  th: {
    borderBottom: "none",
  },

  img: {
    width: "150px",
  },

  h2: {
    lineHeight: 0,
    m: 0,
  },

  span: {
    fw: "600",
    fs: "1.8rem",
  },
};
