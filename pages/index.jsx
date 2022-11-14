// import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative Hair Styling</title>
        <meta name="description" content="Portfolio for Malina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* NavBar as Sidebar */}
      <Nav />
      {/* Hero section */}
      <Header />
      <div className="container">
        {/* About Seciton */}
        <About />

        {/* Icons */}

        {/* Previous work as moving Carousel*/}

        {/* Favourite Products as static Carousel*/}

        {/* footer */}
      </div>
      <Footer />
    </>
  );
}
