import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav, logo, navContainer } from "../styles/Nav.module.scss";

const Nav = () => {
  const [img, setImage] = useState("/../public/menu.png");

  const onScroll = () => {
    window.addEventListener("scroll", () => {
      const toggle = document.getElementById("toggle");

      toggle.style.position = sticky;
    });
  };

  const toggleNav = () => {
    // const container = document.querySelector(".navontainer");

    document.body.classList.toggle("show-nav");
    if (document.body.classList.contains("show-nav")) {
      setImage("/../public/close.png");
    } else {
      setImage("/../public/menu.png");
    }
  };
  return (
    <div className={navContainer}>
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
      <button
        className="toggle"
        id="toggle"
        onClick={toggleNav}
        onScroll={onScroll}
      >
        <Image alt="nav-icon" src={img} width="30px" height="30px" />
      </button>
    </div>
  );
};
export default Nav;
