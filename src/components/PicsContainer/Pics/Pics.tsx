import React from "react";

import Pic from "./Pic/Pic";

import Box from "@mui/material/Box";

import { picturesContainer } from "./Pics.styles";

const Pics: React.FC = () => {
  return (
    <Box sx={picturesContainer}>
      <Pic src="/images/me1.jpg" />
      <Pic src="/images/me2.jpg" />
      <Pic src="/images/me3.jpg" />
      <Pic src="/images/me4.jpg" />
      <Pic src="/images/me5.jpg" />
      <Pic src="/images/me6.jpg" />
    </Box>
  );
};

export default Pics;
