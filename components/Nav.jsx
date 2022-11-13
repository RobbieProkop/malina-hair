import Link from "next/link";
import { nav, logo } from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <nav className={nav}>
      <div class={logo}>
        <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="" />
      </div>
      <ul>
        <li data-text="Home">
          <Link href="#">Home</Link>
        </li>
        <li data-text="About">
          <Link href="#about">About</Link>
        </li>
        <li data-text="Portfolio">
          <Link href="#work">Portfolio</Link>
        </li>
        <li data-text="Contact">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
