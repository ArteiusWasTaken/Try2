import { ThemeOptions } from "@mui/material";

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
  },

  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },

    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: "fixed",
      },
      styleOverrides: {
        root: {
          height: 60,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600,
        },
        h2: {
          fontSize: 20,
          fontWeight: 400,
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "small",
        disableElevation: true,
        color: "info",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: 10,
          ":hover": {
            backgroundColor: "rgba(0,0,0,0.05)",
            transition: "all 0.3s ease-in-out",
          },
        },
      },
    },
  },
};
