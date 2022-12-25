import Image from "next/image";
import { useState } from "react";
import curtainBangs from "../assets/curtain-bangs.jpeg";
import theModern from "../assets/the-modern.jpeg";
import bobCut from "../assets/bob-cut.jpeg";
import lowlights from "../assets/lowlights.jpeg";
import boy from "../assets/boy.jpeg";
import frenchBob from "../assets/french-bob.jpeg";
import ladyFaceShot from "../assets/lady-face-shot.jpeg";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Curtain Bangs",
      link: "https://www.instagram.com/p/ClRxiU0SrxD/",
      desc: "Literally laziest hairstyle ever. For those who’s time restrained but looking for a modern touch",
      imageUrl: curtainBangs,
    },
    {
      title: "The Modern",
      link: "https://www.instagram.com/p/ClEv13lBmS6/",
      desc: "If there’s a name for this hairstyle, I would call this the modern #jenniferaniston #layerlob",
      imageUrl: theModern,
    },
    {
      title: "Bob cut",
      link: "https://www.instagram.com/p/CkbTJgOJMvr/",
      desc: "Playing around with #asymmetricalbob #naturallysilver #bobhaircut",
      imageUrl: bobCut,
    },
    {
      title: "Lowlights",
      link: "https://www.instagram.com/p/CkCXRrspVt-/",
      desc: "Keep your blonde locks, just add some lowlights for more depth and richness.",
      imageUrl: lowlights,
    },
    {
      title: "Boy",
      link: "https://www.instagram.com/p/Cb2yC7uLSL8/",
      desc: "Playing around with #asymmetricalbob #naturallysilver #bobhaircut",
      imageUrl: boy,
    },
    {
      title: "French Bob",
      link: "https://www.instagram.com/p/Ce1iPSqPlrC/",
      desc: "A little enhancement and voila",
      imageUrl: frenchBob,
    },

    {
      title: "Lady Face shot",
      link: "https://www.instagram.com/p/CaScpfKpSyi/",
      desc: "Playing around with #asymmetricalbob #naturallysilver #bobhaircut",
      imageUrl: ladyFaceShot,
    },

    {
      title: "Boy",
      link: "https://www.instagram.com/p/Cb2yC7uLSL8/",
      imageUrl: boy,
    },
    {
      title: "French Bob",
      link: "https://www.instagram.com/p/Ce1iPSqPlrC/",
      imageUrl: frenchBob,
    },

    {
      title: "Lady Face shot",
      link: "https://www.instagram.com/p/CaScpfKpSyi/",
      imageUrl: ladyFaceShot,
    },
  ];

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
