import Image from "next/image";
import insta from "../public/icons/instagram-white.png";

const Contact = () => {
  const openModal = (e) => {
    e.preventDefault();

    document.getElementById("modal").style.display = "block";
  };
  return (
    <section id="contact">
      <div className="flex-center column">
        <h2>Interested in experiencing it for yourself?</h2>
        <button id="open" className="cta-btn" onClick={openModal}>
          Book an Appointment
        </button>
        <h3>Contact me </h3>
        <a
          href="https://www.instagram.com/creative.hair.styling/ "
          target="_blank"
        >
          <span>
            <Image src={insta} width={48} height={48} />
          </span>
          <h4>@creative.hair.stylist</h4>
        </a>{" "}
        <a href="#" target="_blank">
          <span>
            <Image src={insta} width={48} height={48} />
          </span>
          <h4>(403)467-4464</h4>
        </a>{" "}
        <a href="#" target="_blank">
          <span>
            <Image src={insta} width={48} height={48} />
          </span>
          <h4>creative hairstyling</h4>
        </a>{" "}
        <a href="mailto:malina@creativehairstyling.co" target="_blank">
          <span>
            <Image src={insta} width={48} height={48} />
          </span>
          <h4>malina@creativehairstyling.co</h4>
        </a>{" "}
        {/* <p>Malina
          Nguyen Phone (403)467-4464 Email Malina@creativehairstyling.co
          Instagram @creative.hair.styling Facebook creative hairstyling</p> */}
      </div>
    </section>
  );
};
export default Contact;
