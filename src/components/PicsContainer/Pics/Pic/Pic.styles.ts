import type { SxProps, Theme } from "@mui/material";

export const picBox: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  position: "relative",
};

export const picStyles: SxProps<Theme> = {
  width: "10rem",
};

export const verificationButtonStyles: SxProps<Theme> = {
  position: "absolute",
  top: "0.5rem",
  right: "0.6rem",

  "& > svg": {
    background: "none",
    fill: "#2899ff",
  },
};
