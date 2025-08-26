import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Tooltip from "@mui/material/Tooltip";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <WorkOutlineIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume
          </Typography>
          <Tooltip
            sx={{ color: "white" }}
            title="we believe that a strong resume is the first step toward landing your dream job. Our platform is designed to make resume building simple, fast, and effective for everyone—from fresh graduates to experienced professionals."
            placement="bottom-start"
          >
            <Button>About us</Button>
          </Tooltip>{" "}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
