import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import { appTheme, darkTheme, lightTheme } from "../themes";
import { UIProvider } from "../context/ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={appTheme}>
        <CssBaseline enableColorScheme />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

export default MyApp;
