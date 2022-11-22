import Image from "next/image";
import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="slideStyles">
      <a href={slides[currentIndex].link}>
        <Image
          alt="workImage"
          src={slides[currentIndex].imageUrl}
          layout="fill"
          objectFit="contain"
        />
      </a>
    </div>
  );
};
export default ImageSlider;
