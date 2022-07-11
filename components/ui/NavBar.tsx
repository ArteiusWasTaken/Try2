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
import { SearchBar } from "./SearchBar";
import { UserBar } from "./UserBar";
import { useWindowSize } from "../../utils";

export const Navbar = () => {
  const size = useWindowSize();
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Tecniasoft </Typography>
            {size.width >= 668 ? (
              <Typography sx={{ ml: 0.5 }}>| Learning</Typography>
            ) : (
              <Typography>&nbsp;</Typography>
            )}
          </Link>
        </NextLink>
        <SearchBar />
        <Box flex={1} />
        <UserBar />
      </Toolbar>
    </AppBar>
  );
};
