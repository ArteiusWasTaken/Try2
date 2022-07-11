import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  Fade,
  ListItemButton,
  ListItemIcon,
  Menu,
} from "@mui/material";
import { useContext } from "react";
import { UIContext } from "../../context/ui";
import SignOut from "../../utils/SignOut";
import ThemeUpdater from "./ThemeUpdater";

export const UserMenu = () => {
  const { usermenuOpen, closeUserMenu } = useContext(UIContext);
  return (
    <>
      <Menu
        anchorEl={document.getElementById("123")}
        id="account-menu"
        open={usermenuOpen}
        onClose={closeUserMenu}
        TransitionComponent={Fade}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <ListItemButton>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          Perfil
        </ListItemButton>
        <Divider />
        <ThemeUpdater />
        <ListItemButton onClick={SignOut}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          Salir
        </ListItemButton>
      </Menu>
    </>
  );
};
