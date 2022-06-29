import { Box, IconButton, useTheme } from "@mui/material";
import DarkIcon from "@mui/icons-material/Brightness4";
import LightIcon from "@mui/icons-material/Brightness7";

export const SwitchModeButton = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} color="inherit">
        {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
      </IconButton>
    </Box>
  );
};
