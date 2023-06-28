import React, { useState }  from 'react';
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/profile.png";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  Light,
} from "@mui/icons-material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return <AppBar
    sx={{
      position: "static",
      background: "none",
      boxShadow: "none",
    }}
  >
    {/*  Left side  */}
    <Toolbar sx={{ justifyContent: "space-between"}}>
      <FlexBetween>
        <IconButton onClick={() => console.log('open/close sidebar here')}>
          <MenuIcon />
        </IconButton>
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius="9px"
          gap="3rem"
          p="0.1rem 1.5rem"
        >
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      </FlexBetween>
      {/* Right side */}
      <FlexBetween gap="1.5rem">
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlined sx={{ fontSize: "25px" }} />
          ) : (
            <LightModeOutlined sx={{ fontSize: "25px" }} />
          )}
        </IconButton>
        <IconButton>
          <SettingsOutlined sx={{ fontSize: "25px" }} />
        </IconButton>
      </FlexBetween>
    </Toolbar>

  </AppBar>
};

export default Navbar;