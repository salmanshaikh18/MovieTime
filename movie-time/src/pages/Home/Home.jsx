import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import poster from "../../assets/images/poster.png"

const Home = () => {
  return (
    <div className={`HomePage h-[120vh] w-screen bg-[#04152d]`}>
      <Header />
      <img src={poster} alt="" />
      {/* <div className="HeroSeciton">
        <h1>Welcome.</h1>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        <input type="text" placeholder="Search for a movie or tv show..."/>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
