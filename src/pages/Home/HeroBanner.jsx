import React, { useState } from "react";
import "./heroBannerStyle.scss";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate()

  const searchQueryHanler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  };

  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBAnnerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="serachInput">
            <input
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHanler}
              type="text"
              placeholder="Search for a movie or tv show..."
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
