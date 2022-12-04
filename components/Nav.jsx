import Image from "next/image";
import Link from "next/link";
import logoImg from "../public/assets/logo.png";

import { nav, logo } from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    // <div className={navContainer}>
    <nav className={nav}>
      <div className={logo}>
        <Image
          // src="https://randomuser.me/api/portraits/women/12.jpg"
          src={logoImg}
          alt="user"
          height="100px"
          width="100px"
        />
      </div>
      <ul>
        <li data-text="About">
          <Link href="#about">About</Link>
        </li>
        <li data-text="Examples">
          <Link href="#work">Examples</Link>
        </li>
        <li data-text="Favourite Products">
          <Link href="#favourites">Favourite Products</Link>
        </li>
        <li data-text="Contact">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
