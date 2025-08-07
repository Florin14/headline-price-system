import React from "react";
import "./StylingInspo.css";

// Import all images from the assets/images folder
import img1 from "./assets/images/1_image.jpeg";
import img2 from "./assets/images/2_image.jpeg";
import img3 from "./assets/images/3_image.jpeg";
import img4 from "./assets/images/4_image.jpeg";
import img5 from "./assets/images/5_image.jpeg";
import img6 from "./assets/images/6_image.jpeg";
import img7 from "./assets/images/7_image.jpeg";
import img8 from "./assets/images/8_image.jpeg";
import img9 from "./assets/images/9_image.jpeg";
import img10 from "./assets/images/10_image.jpeg";
import img11 from "./assets/images/11_image.jpeg";
import img12 from "./assets/images/12_image.jpeg";
import img13 from "./assets/images/13_image.jpeg";
import img14 from "./assets/images/14_image.jpeg";
import img15 from "./assets/images/15_image.jpeg";
import img16 from "./assets/images/16_image.jpeg";

const StylingInspo: React.FC = () => {
  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
    { id: 9, src: img9 },
    { id: 10, src: img10 },
    { id: 11, src: img11 },
    { id: 12, src: img12 },
    { id: 13, src: img13 },
    { id: 14, src: img14 },
    { id: 15, src: img15 },
    { id: 16, src: img16 },
  ];

  return (
    <div className="styling-inspo-section">
      <div className="title-wrapper">
        <h2 className="styling-inspo-title">STYLING INSPO</h2>
      </div>
      <div className="styling-inspo-container">
        {images.map((image, index) => (
          <div key={image.id} className="styling-image-container">
            <div className="styling-image-wrapper">
              <img
                src={image.src}
                alt={`Styling inspiration ${image.id}`}
                className="styling-image"
              />
              {/* <div className="image-number">{image.id}</div> */}
            </div>
            {index < images.length - 1 && (
              <div className="dotted-path-container">
                <div className="dotted-path"></div>
                <div className="path-star"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StylingInspo;
