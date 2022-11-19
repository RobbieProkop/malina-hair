import Image from "next/image";
import insta from "../public/icons/instagram-white.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex-center column">
        <h2>Interested in experiencing it for yourself?</h2>
        <h3>
          Feel free to contact me on{" "}
          <a
            href="https://www.instagram.com/creative.hair.styling/ "
            target="_blank"
          >
            <span>
              <Image src={insta} width={48} height={48} />
            </span>
          </a>{" "}
        </h3>
      </div>
    </section>
  );
};
export default Contact;
