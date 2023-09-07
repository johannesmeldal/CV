import Navbar_Item from "./Navbar_Item";
import { Box } from "@mui/system";
import { CssBaseline, Divider, Drawer, List, Toolbar } from "@mui/material";

import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "../Styles.css";

const drawerWidth = "20vw";

interface Props {
  window?: () => Window;
}

function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let paths: Array<string> = ["/", "/Cv", "/Projects", "/Contact"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //function that returns a drwar that takes in a size

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {["About me", "Experience", "Projects"].map((text, index) => (
          <Navbar_Item header={text} newPath={paths[index]} />
        ))}
      </List>
      <Divider />
      <List>
        {["Contact Me"].map((text) => (
          <Navbar_Item header={text} newPath={paths[3]} />
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box className="navbar">
      <CssBaseline />
      <Box
        sx={{
          left: "-10px",
          maxHeight: "80px",
          position: "fixed",
          backgroundColor: "secondary.main",
          borderRadius: "10px",
          top: "10px",
          zIndex: 1,
        }}
        onClick={handleDrawerToggle}
      >
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: "none" },
            left: "15px",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navbar;
