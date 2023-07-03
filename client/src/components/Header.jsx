import React from 'react';
import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box
      ml="15.5rem"
      mb="1.5rem"
    >
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px"}}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.secondary[300]}
        fontWeight="bold"
        sx={{ mb: "5px"}}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
