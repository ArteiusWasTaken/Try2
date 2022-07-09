import { Box, Typography } from "@mui/material";
import { CenterLayout } from "../components/layout";
const Custom404 = () => {
  return (
    <CenterLayout
      title="Page not found"
      pageDescription="No hay nada que mostrar aquí"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2}>
          Mira, lo importante es que tenemos salud. <br />
          No hay nada que mostrar aquí.
        </Typography>
      </Box>
    </CenterLayout>
  );
};

export default Custom404;
