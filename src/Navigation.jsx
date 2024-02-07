import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Navigation.css"
import { Link , Route , Switch , BrowserRouter} from 'react-router-dom';
const drawerWidth = 240;
const navItems = ["Home", "About", "Services","Experience", "Projects", "Contact"];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
     <Typography
            variant="h6"
            component="div"
            sx={{ fontFamily: "'WindSong',cursive" }}
          >
            <div className="d-flex justify-content-center align-items-center" style={{borderBottom:"2px dashed white"}}>
             
              <div>
                <span >DashBoard</span>{" "}
              </div>
            </div>
          </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} className="navBtn" component={Link} to={`/${item.toLowerCase()}`} >
             
                <ListItemText primary={item}  />
                <span className="bottomLine"></span>
             
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar component="nav" sx={{ backgroundColor: "rgba(2, 1, 2, 0.75)"  }}> */}
      <AppBar component="nav" sx={{ backgroundColor: "transparent" , borderBottom:"2px solid white" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "rgba(5, 8, 22, 0.75)",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ fontFamily: "'WindSong',cursive" , padding:"25px"  }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                {" "}
                <img
                  src="https://ksr-ugc.imgix.net/assets/009/396/269/4142aff4c50af167caada9c40faadfa7_original.png?ixlib=rb-4.1.0&w=338&h=338&fit=crop&v=1463487975&auto=format&frame=1&q=92&s=7c2f852e38901e676cdba88fc956c5b2"
                  width="60"
                />{" "}
              </div>
              <div>
                <span>amid</span>{" "}
              </div>
            </div>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }} className="navBtn" component={Link} to={`/${item.toLowerCase()}`}>
                {item}
                <span className="bottomLine"></span>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
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
              background:"rgba(5, 8, 22)",color:"white"
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navigation.propTypes = {
  window: PropTypes.func,
};

export default Navigation;
