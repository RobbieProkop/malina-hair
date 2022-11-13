import Link from "next/link";
import { nav, logo } from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <nav className={nav}>
      <div class={logo}>
        <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="" />
      </div>
      <ul>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Portfolio</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
