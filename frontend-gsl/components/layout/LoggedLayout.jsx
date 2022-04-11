import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BarChartIcon from "@mui/icons-material/BarChart";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import RenderWithRoles from "../RenderWithRoles";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          {
            label: "Dashboard",
            icon: DashboardIcon,
            href: "/dashboard",
          },
          {
            label: "Clientes",
            icon: EmojiPeopleIcon,
            href: "/clientes",
          },
          {
            label: "Fornecedores",
            icon: TransferWithinAStationIcon,
          },
          {
            label: "Depósitos",
            icon: OtherHousesIcon,
          },
          {
            label: "Mercadorias",
            icon: ShoppingBasketIcon,
          },
        ].map((item) => (
          <a
            href={item.href}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ListItem button key={item.label}>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          </a>
        ))}
      </List>
      <Divider />
      <List>
        {[
          {
            label: "Gestão Estratégica",
            icon: SupervisorAccountIcon,
          },
          {
            label: "Ciência de Dados",
            icon: BarChartIcon,
          },
        ].map((item) => (
          <RenderWithRoles roles={["administrador"]} key={item.label}>
            <ListItem button>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          </RenderWithRoles>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {props.title}
          </Typography>
          <Button component="a" href="/logout" color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
        <div>{props.children}</div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
