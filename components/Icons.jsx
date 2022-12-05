import Image from "next/image";
import color from "../public/icons/color.png";
import hair from "../public/icons/hair.png";
import scissors from "../public/icons/scissors.png";
// import color from "../public/icons/color-dark.png";
// import hair from "../public/icons/hair-dark.png";
// import scissors from "../public/icons/scissors-dark.png";

const Icons = () => {
  return (
    <div className="flex-icons">
      <div className="icon">
        <Image src={color} width={64} height={64} alt="color" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          temporibus.
        </p>
      </div>
      <div className="icon">
        <Image src={hair} width={64} height={64} alt="hair" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          temporibus.
        </p>
      </div>
      <div className="icon">
        <Image src={scissors} width={64} height={64} alt="scissors" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          temporibus.
        </p>
      </div>
    </div>
  );
};
export default Icons;
