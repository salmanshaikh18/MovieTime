import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"; // library
import "react-lazy-load-image-component/src/effects/blur.css"; // library styling

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt=""
      effect="blur" // blur or opacity
      src={src}
    />
  );
};

export default Img;
// 