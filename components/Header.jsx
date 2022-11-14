import Image from "next/image";

const Header = () => {
  const openModal = (e) => {
    e.preventDefault();

    document.getElementById("modal").style.display = "block";
  };

  return (
    <header>
      <button className="toggle" id="toggle">
        <Image src="/../public/menu.png" width="30px" height="30px" />
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
