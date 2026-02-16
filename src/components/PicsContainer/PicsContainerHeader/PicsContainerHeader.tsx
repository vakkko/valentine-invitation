import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { PicsContainerHeaderStyles } from "./PicsContainerHeader";

const PicsContainerHeader: React.FC = () => {
  return (
    <Box sx={PicsContainerHeaderStyles}>
      <Typography component={"h2"} color="white">
        Select all images of your
        <Typography component={"span"}> Bae</Typography>
      </Typography>
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHl3bHZrZHIyb3VoYm54NDVrZm4ybjZudHpobGRoZXNpb3ptcHQ3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EhDVSJIkhffLpLDLKl/giphy.gif"
        alt="pengiun searching"
      />
    </Box>
  );
};

export default PicsContainerHeader;
