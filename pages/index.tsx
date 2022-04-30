import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/home/Home";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{"D-market"}</title>
      </Head>
      <Home />
    </div>
  );
};

export default HomePage;
