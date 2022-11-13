import Head from "next/head";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creative Hair Styling</title>
        <meta name="description" content="Portfolio for Malina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Showcase />
      <main>
        <h1>Here is the Home Page</h1>
      </main>

      <Footer />
    </div>
  );
}
