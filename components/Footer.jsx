import Link from "next/link";
import { footer } from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <p className={footer}>
        Creative Hair Styling &copy; 2023 | Site by{" "}
        <Link href="https://dhammadevs.com">
          <a target="_blank">DhammaDevs</a>
        </Link>
      </p>
    </div>
  );
};
export default Footer;
