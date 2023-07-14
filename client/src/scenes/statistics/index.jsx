import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import NoGeoChart from "components/NoGeoChart";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Box ml="6.5rem">
        <Header title="Statistics" subtitle="Sales By Geo" />
      </Box>
      <Box mt="40px" height="75vh" ml="15rem">
        <NoGeoChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
