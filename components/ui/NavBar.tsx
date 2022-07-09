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
import ThemeUpdater from "./ThemeUpdater";
import { SearchBar } from "./SearchBar";
import { UserBar } from "./UserBar";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>

        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Tecniasoft |</Typography>
            <Typography sx={{ ml: 0.5 }}>Learning</Typography>
          </Link>
        </NextLink>

        <SearchBar />

        <Box flex={1} />
        {/* <ThemeUpdater /> */}
        <UserBar />
      </Toolbar>
    </AppBar>
  );
};
