import Image from "next/image";
import insta from "../public/icons/instagram-white.png";

const MoreInfo = () => {
  return (
    <section>
      <div className="flex-center">
        <h2>Find More</h2>
        <a
          href="https://www.instagram.com/creative.hair.styling/ "
          target="_blank"
        >
          <h2>@creative.hair.styling</h2>
          <span>
            <Image src={insta} width={48} height={48} />
          </span>
        </a>
      </div>
    </section>
  );
};
export default MoreInfo;
