import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const openModal = (e) => {
    e.preventDefault();

    document.getElementById("modal").style.display = "block";
  };

  const [img, setImage] = useState("/../public/menu.png");

  const toggleNav = () => {
    document.body.classList.toggle("show-nav");

    const toggle = document.getElementById("toggle");

    console.log("toggle.children :>> ", toggle.children);

    if (document.body.classList.contains("show-nav")) {
      setImage("/../public/close.png");
    } else {
      setImage("/../public/menu.png");
    }
  };

  return (
    <header>
      <button className="toggle" id="toggle" onClick={toggleNav}>
        <Image src={img} width="30px" height="30px" />
      </button>

      <h1>Creative Hair Styling</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo!
      </p>

      <button id="open" className="cta-btn" onClick={openModal}>
        Book an Appointment
      </button>
    </header>
  );
};
export default Header;
