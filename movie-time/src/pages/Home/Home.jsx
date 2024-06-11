import React from "react";
import HeroBanner from "./HeroBanner";
import Trending from "./Trending";

const Home = () => {
  return (
    <div className={`HomePage h-[120vh] w-full bg-[#04152d]`}>
      <HeroBanner />
      <Trending />
    </div>
  );
};

export default Home;
