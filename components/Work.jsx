import Image from "next/image";
import data from "../pages/api/workData.json";

import { useState, useRef, useEffect } from "react";

const Work = () => {
  // const getPhotos = async () => {
  //   const res = await fetch("../pages/api/workData.json");
  //   const data = await res.json;
  //   console.log("data", data);
  // };

  // getPhotos();

  // follow along for carousel at https://robkendal.co.uk/blog/how-to-build-a-multi-image-carousel-in-react-and-tailwind
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex >= 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
    console.log("currentIndex", currentIndex);
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
      console.log("currentIndex", currentIndex);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    console.log("currentIndex :>> ", currentIndex);
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  return (
    <section id="work" className="carouselStyle">
      <div className="heading">
        <h2>Check Out My Work</h2>
        <div className="carousel-btn">
          <button
            onClick={movePrev}
            className="prev-btn"
            disabled={isDisabled("prev")}
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
            disabled={isDisabled("next")}
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
