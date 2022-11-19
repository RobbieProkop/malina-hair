import { footer } from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <p className={footer}>
        Creative Hair Styling &copy; 2023 | Site by{" "}
        <a href="https://dhammadevs.com" target="_blank">
          DhammaDevs
        </a>
      </p>
    </div>
  );
};
export default Footer;
