import Image from "next/image";
import { menu } from "../public/menu.png";

const Header = () => {
  return (
    <header>
      <button className="toggle" id="toggle">
        <Image src={menu} />
      </button>

      <h1>Creative Hair Styling</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo!
      </p>

      <button id="open" className="cta-btn">
        Book an Appointment
      </button>
    </header>
  );
};
export default Header;
