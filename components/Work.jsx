import { resources } from "../pages/api/workData.json";

const Work = () => {
  // const getPhotos = async () => {
  //   const res = await fetch("../pages/api/workData.json");
  //   const data = await res.json();
  //   return data;
  // };

  // getPhotos();
  console.log("data", resources);
  // resources.forEach((resource) => console.log(resource.title));

  return (
    <div>
      <div>
        {resources.map((resource) => {
          return (
            <a key={resource.link} href={resource.imageUrl} target="_blank">
              {resource.title}
            </a>
          );
        })}
      </div>
      <div>Work 2</div>
      <div>Work 3</div>
      <div>Work 4</div>
    </div>
  );
};
export default Work;
