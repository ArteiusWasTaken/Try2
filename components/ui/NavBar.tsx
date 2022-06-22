import NextLink from "next/link";
import { useContext } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { UIContext } from "../../context/ui";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Pokémon Legends Arceus |</Typography>
            <Typography sx={{ ml: 0.5 }}>Research Dex</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box flex={1} />

        <IconButton onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
