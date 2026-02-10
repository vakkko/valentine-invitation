import React from "react";

import TableHead from "@mui/material/TableHead";
import Typography from "@mui/material/Typography";
import { tableHeaderStyle } from "./TableHeader.styles";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TableHeader: React.FC = () => {
  return (
    <TableHead sx={tableHeaderStyle}>
      <TableRow>
        <TableCell>
          <Typography component={"h2"} color="white">
            Select all images of your
            <Typography component={"span"}> Bae</Typography>
          </Typography>
        </TableCell>
        <TableCell>
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHl3bHZrZHIyb3VoYm54NDVrZm4ybjZudHpobGRoZXNpb3ptcHQ3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EhDVSJIkhffLpLDLKl/giphy.gif"
            alt="pengiun searching"
          />
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
