import React, { useState } from "react";

import Box from "@mui/material/Box";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import type { PicProps } from "./Pic.types";

import { picBox, picStyles, verificationButtonStyles } from "./Pic.styles";

const Pic: React.FC<PicProps> = ({ src }) => {
  const [checkced, setChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box onClick={handleToggle} component={"button"} sx={picBox}>
      {checkced && (
        <Box sx={verificationButtonStyles} component={"button"}>
          <CheckCircleIcon />
        </Box>
      )}
      <Box component={"img"} sx={picStyles} src={src} alt="me" />
    </Box>
  );
};

export default Pic;
