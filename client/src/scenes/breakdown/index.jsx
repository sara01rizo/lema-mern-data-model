import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import BreakdownChart from "components/BreakdownChart";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Box ml="6.5rem">
        <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      </Box>
      <Box mt="40px" height="75vh" ml="15rem">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
