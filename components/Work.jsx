import Image from "next/image";
import { resources } from "../pages/api/workData.json";

import { useState, useRef, useEffect } from "react";

const Work = () => {
  // const getPhotos = async () => {
  //   const res = await fetch("../pages/api/workData.json");
  //   const data = await res.json;
  //   console.log("data", data);
  // };

  // getPhotos();
  const movePrev = () => {};
  const moveNext = () => {};
  return (
    <section id="work" className="carousel">
      <h2>Check Out My Work</h2>
      <div className="">
        <div>
          <button onClick={movePrev} className="prev-btn">
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
          <button onClick={moveNext} className="next-btn">
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
        <div className="carousel-container" ref={carousel}>
          {resources.map((resource, index) => {
            return (
              <div className="carousel-item" key={index}>
                <a href={resource.link}>
                  <Image
                    src={recourse.imageUrl || ""}
                    alt={resource.title}
                    objectFit="contain"
                  />
                </a>
                <h3>{resource.title}</h3>
              </div>
            );
          })}
        </div>
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
