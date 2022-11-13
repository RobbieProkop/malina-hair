import { footer } from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <p className={footer}>
        Copyright &copy; 2023{" "}
        <a
          href="https://www.instagram.com/creative.hair.styling/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram{" "}
        </a>
        | Site by{" "}
        <a href="https://dhammadevs.com" target="_blank">
          DhammaDevs
        </a>
      </p>
    </div>
  );
};
export default Footer;
