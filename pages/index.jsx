// import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Modal from "../components/Modal";
import { useState } from "react";
import Icons from "../components/Icons";

export default function Home() {
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
    <>
      <Head>
        <title>Creative Hair Styling</title>
        <meta name="description" content="Portfolio for Malina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* NavBar as Sidebar */}
      <Nav />
      <div className="container">
        {/* Hero section */}
        <Header />
        <main className="main-container">
          {/* About Seciton */}
          <About />

          {/* Icons */}
          <Icons />

          {/* Previous work as moving Carousel*/}

          {/* Favourite Products as static Carousel*/}

          {/* Contact Modal */}
          <Modal />
        </main>
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}
