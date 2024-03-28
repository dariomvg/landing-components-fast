import "./globals.css";
import iconBack from "../assets/arrow-back.svg";
import iconNext from "../assets/arrow-next.svg";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import { useEffect, useState } from "react";

const CarrouselImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3]; 

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (true) {
      const interval = setInterval(() => goToNext(), 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  return (
    <div className="carrousel">
      <img
        src={images[currentIndex].src}
        alt="image slide"
        loading="lazy"
        width="100%"
        height="100%"
      />
      <div className="container-btn">
        <img
          src={iconBack.src}
          alt="arrow back"
          width="60"
          height="60"
          loading="lazy"
          onClick={goToPrev}
          className="btn"
        />
        <img
          src={iconNext.src}
          alt="arrow next"
          width="60"
          height="60"
          loading="lazy"
          onClick={goToNext}
          className="btn"
        />
      </div>
    </div>
  );
};

export default CarrouselImages;
