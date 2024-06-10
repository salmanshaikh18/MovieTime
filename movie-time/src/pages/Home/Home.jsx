import React from "react";
import poster from "../../assets/images/poster.png"
import HeroBanner from "./HeroBanner";

const Home = () => {
  return (
    <div className={`HomePage h-[120vh] w-screen bg-[#04152d]`}>
      {/* <img src={poster} alt="" /> */}
      <HeroBanner />
    </div>
  );
};

export default Home;
