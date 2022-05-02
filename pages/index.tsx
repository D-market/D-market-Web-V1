import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/home/Home";
import useTheme from "../hooks/theme/useTheme";

const HomePage: NextPage = () => {
  const { toggleChangeTheme } = useTheme();

  return (
    <div>
      <Head>
        <title>{"D-market"}</title>
      </Head>
      <Home />
      <button onClick={toggleChangeTheme}>theme</button>
    </div>
  );
};

export default HomePage;
