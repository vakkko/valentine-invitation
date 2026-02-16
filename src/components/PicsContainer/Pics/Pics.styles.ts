import type { SxProps, Theme } from "@mui/material";

export const picturesContainer: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: "0.3rem",
};
