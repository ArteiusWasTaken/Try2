import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UIProvider } from "../context/ui";
import { FC } from "react";
import { EmotionCache } from "@emotion/react";
import { PageProvider } from "../utils";

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <PageProvider emotionCache={emotionCache}>
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  </PageProvider>
);

export default App;
