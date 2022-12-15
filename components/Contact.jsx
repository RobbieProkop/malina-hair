import Image from "next/image";
import insta from "../public/icons/instagram-white.png";
// import insta from "../public/icons/instagram-logo.png";
import fb from "../public/icons/facebook.png";
import phone from "../public/icons/telephone.png";
import email from "../public/icons/email.png";
import Link from "next/link";

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
        <Link href="https://www.instagram.com/creative.hair.styling/ ">
          <a target="_blank">
            <span>
              <Image src={insta} width={48} height={48} alt="insta" />
            </span>
            <h4>@creative.hair.stylist</h4>
          </a>
        </Link>{" "}
        {/* facebook */}
        <Link href="https://www.facebook.com/Creative.Hairstyling.YYC">
          <a target="_blank">
            <span>
              <Image src={fb} width={48} height={48} alt="facebook" />
            </span>
            <h4>creative hairstyling</h4>
          </a>
        </Link>{" "}
        {/* telephone */}
        <a>
          <span>
            <Image src={phone} width={48} height={48} alt="phone" />
          </span>
          <h4>(403) 467-4464</h4>
        </a>
        {/* email */}
        <Link href="mailto:malina@creativehairstyling.co">
          <a target="_blank">
            <span>
              <Image src={email} width={48} height={48} alt="email" />
            </span>
            <h4>malina@creativehairstyling.co</h4>
          </a>
        </Link>{" "}
      </div>
    </section>
  );
};
export default Contact;
