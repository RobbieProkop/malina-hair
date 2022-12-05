import Image from "next/image";
import data from "../pages/api/workData.json";

import { useState, useRef, useEffect } from "react";

const Favourites = () => {
  // initial value set to length of array -3
  const maxScrollWidth = useRef(7);
  const [currentIndex, setCurrentIndex] = useState(7);
  const carousel = useRef(null);
  const [isMobile, setMobile] = useState(false);
  const [isTablet, setTablet] = useState(false);

  const handleWindowSizeChange = () => {
    if (window.innerWidth <= 900 && window.innerWidth > 550) {
      setTablet(true);
      setMobile(false);
      return;
    }

    if (window.innerWidth <= 550) {
      setTablet(false);
      setMobile(true);
      return;
    }
    setMobile(false);
    setTablet(false);
  };
  const moveNext = () => {
    const isFirstSlide = currentIndex === 0;
    let device;

    if (isMobile) device = 1;
    if (isTablet) device = 2;
    if (!isMobile && !isTablet) device = 3;

    const newIndex = isFirstSlide
      ? data.resources.length - device
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const movePrev = () => {
    //device number should change depending on how many items are in the data.resources array
    let device;

    if (isMobile) device = 1;
    if (isTablet) device = 2;
    if (!isMobile && !isTablet) device = 3;

    const isLastSlide = currentIndex === data.resources.length - device;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    handleWindowSizeChange();
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 7;
  }, []);

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      // each card is 260px, so we want to scroll 260px each click

      // if (currentIndex === data.resources.length) {
      //   carousel.current.scrollLeft = 100 * 9;
      // } else {
      carousel.current.scrollLeft =
        260 * (currentIndex !== 0 ? currentIndex : -1);
    }
    window.innerWidth;
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [currentIndex]);

  return (
    <section id="favourites" className="carouselStyle carousel-reverse">
      <div className="carousel-container" ref={carousel}>
        {data.resources.map((resource, index) => {
          return (
            <a
              className="carousel-item"
              key={index}
              href={resource.link}
              target="_blank"
              rel="noreferrer"
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
      <div className="heading">
        <div className="heading-container">
          <h2>Here are my favourite products</h2>
          <div className="carousel-btn">
            <button onClick={moveNext} className="prev-btn">
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
              <span className="sr-only">Next</span>
            </button>
            <button onClick={movePrev} className="next-btn">
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
              <span className="sr-only">Prev</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Favourites;
