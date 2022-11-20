import Image from "next/image";
import insta from "../public/icons/instagram-white.png";
import fb from "../public/icons/facebook.png";
import phone from "../public/icons/telephone.png";
import email from "../public/icons/email.png";

const Contact = () => {
  const openModal = (e) => {
    e.preventDefault();

    document.getElementById("modal").style.display = "block";
    document.body.style.setProperty("overflow", "hidden");
  };
  return (
    <section id="contact">
      <div className="flex-center column">
        <h2>Interested in experiencing it for yourself?</h2>
        <button id="open" className="cta-btn" onClick={openModal}>
          Book an Appointment
        </button>
        <h3>Contact me </h3>
        {/* instagram */}
        <a
          href="https://www.instagram.com/creative.hair.styling/ "
          target="_blank"
        >
          <span>
            <Image src={insta} width={48} height={48} />
          </span>
          <h4>@creative.hair.stylist</h4>
        </a>{" "}
        {/* facebook */}
        <a href="#" target="_blank">
          <span>
            <Image src={fb} width={48} height={48} />
          </span>
          <h4>creative hairstyling</h4>
        </a>{" "}
        {/* telephone */}
        <a href="#" target="_blank">
          <span>
            <Image src={phone} width={48} height={48} />
          </span>
          <h4>(403) 467-4464</h4>
        </a>{" "}
        {/* email */}
        <a href="mailto:malina@creativehairstyling.co" target="_blank">
          <span>
            <Image src={email} width={48} height={48} />
          </span>
          <h4>malina@creativehairstyling.co</h4>
        </a>{" "}
      </div>
    </section>
  );
};
export default Contact;
