import Image from "next/image";
import { resources } from "../pages/api/workData.json";

const Work = () => {
  // const getPhotos = async () => {
  //   const res = await fetch("../pages/api/workData.json");
  //   const data = await res.json;
  //   console.log("data", data);
  // };

  // getPhotos();
  return (
    <div>
      {resources.map((resource) => {
        return (
          <a key={resource.link} href={resource.imageUrl} target="_blank">
            <Image src={resource.imageUrl} width="50px" height="50px" />
          </a>
        );
      })}
    </div>
  );
};
export default Work;
