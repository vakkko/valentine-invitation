import React from "react";

import PicsContainerHeader from "./PicsContainerHeader/PicsContainerHeader.tsx";
import Pics from "./Pics/Pics.tsx";

import Box from "@mui/material/Box";

import { TableStyles } from "./PicsContainer.styles";

const PicsContainer: React.FC = () => {
  return (
    <Box sx={TableStyles}>
      <PicsContainerHeader />
      <Pics />
    </Box>
  );
};

export default PicsContainer;
