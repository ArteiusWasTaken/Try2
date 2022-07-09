import { useContext } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItemButton,
  Divider,
  IconButton,
} from "@mui/material";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import AltRouteOutlinedIcon from "@mui/icons-material/AltRouteOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import { UIContext } from "../../context/ui";
import SignOut from "../../utils/SignOut";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

interface MenuData {
  items: MenuItem[];
}

interface MenuItem {
  name: string;
  icon: any;
  link: string;
}

const menuItems: MenuData = {
  items: [
    {
      name: "Todo",
      icon: <TravelExploreOutlinedIcon />,
      link: "/",
    },
    {
      name: "Esto",
      icon: <AltRouteOutlinedIcon />,
      link: "/side",
    },
    {
      name: "todavía",
      icon: <NotListedLocationOutlinedIcon />,
      link: "/unown",
    },
    {
      name: "No",
      icon: <LocalFireDepartmentOutlinedIcon />,
      link: "/wisp",
    },
  ],
};

export const Sidebar = () => {
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <IconButton
            onClick={closeSideMenu}
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <MenuOutlinedIcon />
            <Typography variant="h4" textAlign="center">
              &nbsp;Menu
            </Typography>
          </IconButton>
        </Box>

        <List>
          {menuItems.items.map((el, index) => (
            <ListItemButton key={index} href={el.link}>
              <ListItemIcon>{el.icon}</ListItemIcon>
              <ListItemText primary={el.name} />
            </ListItemButton>
          ))}
          <Divider />
          <ListItemButton onClick={SignOut}>
            <ListItemIcon>
              <PowerSettingsNewOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Salir</ListItemText>
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};
