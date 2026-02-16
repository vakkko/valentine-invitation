import type { SxProps, Theme } from "@mui/material";

export const PicsContainerHeaderStyles: SxProps<Theme> = {
  backgroundColor: "#4a90e2",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.5rem",
  mb: "1rem",

  img: {
    width: "150px",
  },

  h2: {
    lineHeight: 0,
    m: 0,
  },

  span: {
    fontWeight: "600",
    fontSize: "1.8rem",
  },
};
