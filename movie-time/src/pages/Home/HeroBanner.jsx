import React from "react";
import Img from "../../components/LazyLoadImage/Img";
import poster from "../../assets/images/poster.png"

const HeroBanner = () => {
  return (
    <div className="HeroBanner relative w-screen h-[450px] md:h-[700px] bg-[#04152d] flex flex-col items-center">
        <div className="backdropImage absolute h-full w-full top-0 left-0 opacity-[0.5] overflow-hidden">
            <Img className='h-full w-full bg-cover bg-center' src={poster}/>
        </div>
        <div className="opacityLayer w-full h-[250px] absolute bottom-0 left-0" style={{background: 'linear-gradient(to bottom, rgba(4, 21, 45, 0), #04152d 79.17%)'}}></div>
      <h1>Welcome.</h1>
      <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
      <input type="text" placeholder="Search for a movie or tv show..." />
    </div>
  );
};

export default HeroBanner;
