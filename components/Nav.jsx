import Link from "next/link";
import { useState } from "react";
import { nav, logo } from "../styles/Nav.module.scss";

const Nav = () => {
  const [img, setImage] = useState("/../public/menu.png");

  const toggleNav = () => {
    document.body.classList.toggle("show-nav");
    if (document.body.classList.contains("show-nav")) {
      setImage("/../public/close.png");
    } else {
      setImage("/../public/menu.png");
    }
  };
  return (
    <nav className={nav}>
      <div className={logo}>
        <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="" />
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
