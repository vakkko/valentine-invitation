import type { SxProps, Theme } from "@mui/material";

export const picBox: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "10rem",
  height: "212px",
  transition: "transform 0.2s ease",

  "&.active": {
    transform: "scaleX(0.95) scaleY(0.95)",
  },
};

export const picStyles: SxProps<Theme> = {
  width: "100%",
};

export const verificationButton: SxProps<Theme> = {
  position: "absolute",
  top: "0.5rem",
  right: "0.6rem",

  "&.checked": {
    fill: "#2899ff",
  },

  "&.unchecked": {
    fill: "grey",
  },

  "&:hover": {
    animation: "pop 0.3s ease",
  },

  "@keyframes pop": {
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.25)" },
    "100%": { transform: "scale(1)" },
  },
};
