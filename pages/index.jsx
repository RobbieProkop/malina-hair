import Head from "next/head";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import About from "../components/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creative Hair Styling</title>
        <meta name="description" content="Portfolio for Malina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* NavBar as Sidebar */}
      <Nav />

      {/* Hero section */}
      <Showcase />

      {/* About Seciton */}
      <About />

      {/* Icons */}

      {/* Previous work as moving Carousel*/}

      {/* Favourite Products as static Carousel*/}

      {/* footer */}
      <Footer />
    </div>
  );
}
