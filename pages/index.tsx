import type { NextPage } from "next";
import { BaseLayout } from "../components/layout";
import Login from "../components/ui/Login";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Login />
    </BaseLayout>
  );
};

export default Home;
