import { FC, useEffect, useState } from "react";
import { css, ListItemButton, ListItemIcon } from "@mui/material";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeUpdater: FC<{}> = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div
        css={css`
          min-height: 162.38px;
        `}
      ></div>
    );

  return (
    <ListItemButton
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      <ListItemIcon>
        {resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </ListItemIcon>
      Modo {resolvedTheme === "light" ? "Oscuro" : "Claro"}
    </ListItemButton>
  );
};

export default ThemeUpdater;
