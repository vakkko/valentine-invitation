import React, { useState } from "react";

import Box from "@mui/material/Box";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import type { PicProps } from "./Pic.types";

import { picBox, picStyles, verificationButton } from "./Pic.styles";

const Pic: React.FC<PicProps> = ({ src }) => {
  const [checkced, setChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      className={checkced ? "active" : ""}
      onClick={handleToggle}
      component={"button"}
      sx={picBox}
    >
      {checkced ? (
        <CheckCircleIcon className="checked" sx={verificationButton} />
      ) : (
        <RadioButtonUncheckedIcon
          className="unchecked"
          sx={verificationButton}
        />
      )}
      <Box component={"img"} sx={picStyles} src={src} alt="me" />
    </Box>
  );
};

export default Pic;
