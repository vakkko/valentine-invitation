import React from "react";

import Table from "@mui/material/Table";
import TableHeader from "./TableHeader/TableHeader";

import { TableStyles } from "./PicsTable.styles";

const PicsTable: React.FC = () => {
  return (
    <Table sx={TableStyles}>
      <TableHeader />
    </Table>
  );
};

export default PicsTable;
