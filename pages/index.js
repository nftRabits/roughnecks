import React from "react";
import Index from "../views";
import Head from 'next/head';
const Home = () => {
  return (
    <div>
      <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
      <Index />
    </div>
  );
};

export default Home;
