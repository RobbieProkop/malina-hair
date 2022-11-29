import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const openModal = (e) => {
    e.preventDefault();

    document.getElementById("modal").style.display = "block";
    document.body.style.setProperty("overflow", "hidden");
  };

  return (
    <header id="header">
      <div>
        <h1>Creative Hair Styling</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo!
        </p>

        <button id="open" className="cta-btn" onClick={openModal}>
          Book an Appointment
        </button>
      </div>
    </header>
  );
};
export default Header;
