import Image from "next/image";
import Link from "next/link";
import insta from "../public/icons/instagram-white.png";
// import insta from "../public/icons/instagram-logo.png";

const MoreInfo = () => {
  return (
    <section>
      <div className="flex-center">
        <h2>Find More</h2>
        <Link href="https://www.instagram.com/creative.hair.styling/ ">
          <a target="_blank">
            <h2>@creative.hair.styling</h2>
            <span>
              <Image src={insta} width={48} height={48} alt="insta" />
            </span>
          </a>
        </Link>
      </div>
    </section>
  );
};
export default MoreInfo;
