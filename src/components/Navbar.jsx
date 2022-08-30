import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import ApiIcon from '@mui/icons-material/Api';

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <>
      <AppBar position="sticky">
        <StyledToolBar>
          <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>AM DEV</Typography>
          <ApiIcon sx={{display:{xs:"block",sm:"none"}}}/>
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;
