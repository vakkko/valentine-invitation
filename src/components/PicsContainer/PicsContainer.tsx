import React from "react";

import Box from "@mui/material/Box";
import PicsContainerHeader from "./PicsContainerHeader/PicsContainerHeader.tsx";

import { TableStyles } from "./PicsContainer.styles";

const PicsContainer: React.FC = () => {
  return (
    <Box sx={TableStyles}>
      <PicsContainerHeader />
    </Box>
  );
};

export default PicsContainer;
