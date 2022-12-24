import data from "../pages/api/workData.json";
import ImageSlider from "./ImageSlider";

const Work = () => {
  // follow along for carousel at https://robkendal.co.uk/blog/how-to-build-a-multi-image-carousel-in-react-and-tailwind
  // const maxScrollWidth = useRef(0);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const carousel = useRef(null);
  // const [width, setWidth] = useState(0);

  // // setWidth(screenWidth);

  // const movePrev = () => {
  //   // let screenWidth = window.innerWidth;
  //   const isFirstSlide = currentIndex === 0;
  //   const resourceLength = data.resources.length;

  //   // if (!isFirstSlide) {
  //   //   console.log("not first!");
  //   //   return setCurrentIndex(currentIndex - 1);
  //   // }
  //   // console.log("first!!!");
  //   // if (screenWidth >= 1350) {
  //   //   const newIndex = resourceLength - 3;
  //   //   setCurrentIndex(newIndex);
  //   // } else if (screenWidth >= 1040) {
  //   //   const newIndex = resourceLength - 2;
  //   //   setCurrentIndex(newIndex);
  //   // } else {
  //   //   const newIndex = resourceLength - 1;
  //   //   setCurrentIndex(newIndex);
  //   // }
  //   const newIndex = isFirstSlide ? resourceLength - 3 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const moveNext = () => {
  //   // -3 should change depending on how many items are in the data.resources array
  //   // let screenWidth = window.innerWidth;
  //   // const resourceLength = data.resources.length;

  //   // // let isLastSlide = currentIndex === resourceLength - 1;
  //   // // console.log("isLastSlide", isLastSlide);
  //   // // if (!isLastSlide) {
  //   // //   return setCurrentIndex(currentIndex + 1);
  //   // // }

  //   // if (screenWidth >= 1350) {
  //   //   let isLastSlide = currentIndex === resourceLength - 3;
  //   //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   //   setCurrentIndex(newIndex);
  //   // } else if (screenWidth >= 1040) {
  //   //   let isLastSlide = currentIndex === resourceLength - 2;
  //   //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   //   setCurrentIndex(newIndex);
  //   // } else {
  //   //   let isLastSlide = currentIndex === resourceLength - 1;
  //   //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   //   setCurrentIndex(newIndex);
  //   // }
  //   // // const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   // // setCurrentIndex(newIndex);

  //   const isLastSlide = currentIndex === data.resources.length - 3;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  // useEffect(() => {
  //   maxScrollWidth.current = carousel.current
  //     ? carousel.current.scrollWidth - carousel.current.offsetWidth
  //     : 0;
  // }, []);

  // useEffect(() => {
  //   if (carousel !== null && carousel.current !== null) {
  //     // each card is 256px, so we want to scroll 256px each click

  //     carousel.current.scrollLeft =
  //       246 * (currentIndex !== 0 ? currentIndex : -1);
  //   }
  // }, [currentIndex]);

  return (
    // <section id="work" className="carouselStyle">
    //   <div className="heading">
    //     <div className="heading-container">
    //       <h2>Check Out My Work</h2>
    //       <div className="carousel-btn">
    //         <button
    //           onClick={movePrev}
    //           className="prev-btn"
    //           // disabled={isDisabled("prev")}
    //         >
    //           {/* CHANGE THIS LATER */}
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-12 w-20 -ml-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             strokeWidth={2}
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M15 19l-7-7 7-7"
    //             />
    //           </svg>
    //           <span className="sr-only">Prev</span>
    //         </button>
    //         <button
    //           onClick={moveNext}
    //           className="next-btn"
    //           // disabled={isDisabled("next")}
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-12 w-20 -ml-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             strokeWidth={2}
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M9 5l7 7-7 7"
    //             />
    //           </svg>
    //           <span className="sr-only">Next</span>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <div className="carousel-container"> */}
    //   <div className="carousel-container" ref={carousel}>
    //     {data.resources.map((resource, index) => {
    //       return (
    //         <a
    //           className="carousel-item"
    //           key={index}
    //           href={resource.link}
    //           target="_blank"
    //           rel="noreferrer"
    //           draggable
    //         >
    //           <div className="image-container">
    //             <Image
    //               src={resource.imageUrl || ""}
    //               alt={resource.title}
    //               layout="fill"
    //               // width="100px"
    //               // height="100px"
    //               objectFit="contain"
    //             />
    //           </div>
    //           <h3>{resource.title}</h3>
    //           <p>{resource.desc}</p>
    //         </a>
    //       );
    //     })}
    //   </div>
    // </section>

    // using imageSLider component
    <section id="work" className="workSlider">
      <h2>Check Out My Work</h2>

      <ImageSlider slides={data.resources} />
    </section>
  );
};
export default Work;
