import React, { useEffect, useState } from "react";
import Img from "../../components/LazyLoadImage/Img";
import poster from "../../assets/images/poster.png";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.movie);
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 18)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  return (
    <div className="HeroBanner relative w-full h-[450px] md:h-[700px] bg-[#04152d] flex flex-col items-center">
      {!loading && (
        <div className="backdropImage absolute h-full w-full top-0 left-0 opacity-[0.5] overflow-hidden">
          <Img
            className="h-[75vh] sm:h-[700px] w-[100vw] bg-cover bg-center"
            src={background}
          />
        </div>
      )}
      <div
        className="opacityLayer w-full h-[250px] absolute bottom-0 left-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4, 21, 45, 0), #04152d 79.17%)",
        }}
      ></div>
      <div className="heroBannerContent sm:mt-12 flex flex-col items-center text-center text-white relative max-w-[800px] justify-center h-[100vh] leading-tight">
        <h1 className="text-white sm:text-[92px] font-bold text-[50px]">
          Welcome.
        </h1>
        <p className="text-white sm:text-2xl mb-4 text-[16px] px-4 text-wrap">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className="flex items-center mt-8 w-[70vw] justify-center px-2 sm:px-10">
          <input
            className="sm:w-[70vw] sm:text-[20px] w-[70vw] outline-none border-none px-2 py-[15px] rounded-l-3xl sm:px-[20px] text-black"
            type="text"
            placeholder="Search for a movie or tv show..."
          />
          <button
            className="sm:h-[55px] h-[50px] px-2 sm:text-lg sm:w-[250px] sm:bg-red-500 rounded-r-3xl"
            style={{
              background:
                "linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%)",
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
