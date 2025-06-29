import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];
  const [currentImgIndx, setImgIndx] = useState(0);

  const prevImg = () => {
    if (currentImgIndx > 0) {
      setImgIndx(currentImgIndx - 1);
    } else if (currentImgIndx === 0) {
      setImgIndx(images.length - 1);
    }
  };
  const nextImg = () => {
    if (currentImgIndx === images.length - 1) {
      setImgIndx(0);
    } else {
      setImgIndx(currentImgIndx + 1);
    }
  };
  return (
    <div className="gallery">
      <div className="main-img">
        <img src={"./src/assets/images/" + images[currentImgIndx]} />
        <div className="buttons">
          <button className="prev" onClick={prevImg}>
            <img src="./src/assets/zenklai/arrow-left.svg" />
          </button>
          <button className="next" onClick={nextImg}>
            <img src="./src/assets/zenklai/arrow-right.svg" />
          </button>
        </div>
      </div>
      <div className="navigation">
        {images.map((img, i) => (
          <div key={i}>
            <img
              src={"../src/assets/images/" + img}
              className={i === currentImgIndx ? "active" : ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
