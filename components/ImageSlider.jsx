import Image from "next/image";
import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const moveNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const gotToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slideStyles">
      {/* buttons */}
      <div
        className="image-btn btn-left"
        data-testid="test-btn-left"
        onClick={movePrev}
      >
        ❰
      </div>
      <div className="image-btn btn-right" onClick={moveNext}>
        ❱
      </div>

      {/* image */}
      <a href={slides[currentIndex].link} target="_blank" rel="noreferrer">
        <Image
          alt="workImage"
          src={slides[currentIndex].imageUrl}
          layout="fill"
          objectFit="contain"
        />
      </a>

      {/* dots underneath */}
      <div className="dots-container">
        {slides.map((slide, slideIndex) =>
          slideIndex === currentIndex ? (
            <div
              key={slideIndex}
              className="dot current-dot"
              onClick={() => gotToSlide(slideIndex)}
            >
              ●
            </div>
          ) : (
            <div
              key={slideIndex}
              className="dot"
              onClick={() => gotToSlide(slideIndex)}
            >
              ●
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default ImageSlider;
