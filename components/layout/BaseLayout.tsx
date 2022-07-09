import Head from "next/head";
import React, { FC } from "react";
import { Navbar, Sidebar } from "../ui";

interface Props {
  title?: string;
  pageDescription?: string;
  children?: React.ReactNode;
}

export const BaseLayout: FC<Props> = ({
  title = "Tecniasoft",
  pageDescription = "Cursos",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <Sidebar />
      <main
        style={{
          maxWidth: "320px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </main>
      <footer>{/* TODO: mi custom footer */}</footer>
    </>
  );
};
