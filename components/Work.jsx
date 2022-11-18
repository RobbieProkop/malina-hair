import Image from "next/image";
import data from "../pages/api/workData.json";

import { useState, useRef, useEffect } from "react";

const Work = () => {
  // follow along for carousel at https://robkendal.co.uk/blog/how-to-build-a-multi-image-carousel-in-react-and-tailwind
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? data.resources.length - 3
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const moveNext = () => {
    // -4 should change depending on how many items are in the data.resources array
    const isLastSlide = currentIndex === data.resources.length - 3;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      // each card is 256px, so we want to scroll 256px each click

      carousel.current.scrollLeft =
        246 * (currentIndex !== 0 ? currentIndex : -1);
    }
  }, [currentIndex]);

  // setTimeout(() => {
  //   // again, change -4 depending on the length of the data array
  //   if (currentIndex !== data.resources.length - 4) {
  //     return setCurrentIndex(currentIndex + 1);
  //   }
  //   setCurrentIndex(0);
  // }, 3000);

  return (
    <section id="work" className="carouselStyle">
      <div className="heading">
        <div className="heading-container">
          <h2>Check Out My Work</h2>
          <div className="carousel-btn">
            <button
              onClick={movePrev}
              className="prev-btn"
              // disabled={isDisabled("prev")}
            >
              {/* CHANGE THIS LATER */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="next-btn"
              // disabled={isDisabled("next")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="carousel-container"> */}
      <div className="carousel-container" ref={carousel}>
        {data.resources.map((resource, index) => {
          return (
            <a
              className="carousel-item"
              key={index}
              href={resource.link}
              target="_blank"
            >
              <div className="image-container">
                <Image
                  src={resource.imageUrl || ""}
                  alt={resource.title}
                  layout="fill"
                  // width="100px"
                  // height="100px"
                  objectFit="contain"
                />
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.desc}</p>
            </a>
          );
        })}
      </div>
    </section>
    // <div>
    //   {resources.map((resource) => {
    //     return (
    //       <a key={resource.link} href={resource.imageUrl} target="_blank">
    //         <Image src={resource.imageUrl} width="50px" height="50px" />
    //       </a>
    //     );
    //   })}
    // </div>
  );
};
export default Work;
