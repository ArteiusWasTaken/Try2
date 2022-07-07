import { FC, useEffect, useState } from "react";
import { Button, css, MenuItem, Select, Typography } from "@mui/material";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeUpdater: FC<{}> = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
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
    <div
      css={css`
        display: grid;
        grid-gap: 8px;
      `}
    >
      <Button
        css={css`
          background: linear-gradient(to top right, #2a48f3 0%, #c32cc2 100%);
        `}
        variant="contained"
        endIcon={
          resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />
        }
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        Toggle {resolvedTheme === "light" ? "dark" : "light"} mode
      </Button>
    </div>
  );
};

export default ThemeUpdater;
