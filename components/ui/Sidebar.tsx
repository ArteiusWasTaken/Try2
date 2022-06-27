import { useContext } from "react";
import {
  Box,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItemButton,
} from "@mui/material";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import AltRouteOutlinedIcon from "@mui/icons-material/AltRouteOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import NextLink from "next/link";
import { UIContext } from "../../context/ui";

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
    {
      name: "Funcionas",
      icon: <ArticleOutlinedIcon />,
      link: "/old",
    },
  ],
};

export const Sidebar = () => {
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="right" open={sidemenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4" textAlign="center">
            Menu
          </Typography>
        </Box>

        <List>
          {menuItems.items.map((el, index) => (
            <ListItemButton key={index} href={el.link}>
              <ListItemIcon>{el.icon}</ListItemIcon>
              <ListItemText primary={el.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
