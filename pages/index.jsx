import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creative Hair Styling</title>
        <meta name="description" content="Portfolio for Malina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Here is the Home Page</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/creative.hair.styling/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram Logo Here
        </a>
      </footer>
    </div>
  );
}
