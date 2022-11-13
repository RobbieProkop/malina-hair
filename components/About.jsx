import Image from "next/image";
import styles from "../styles/Home.module.scss";

const About = () => {
  return (
    <main id="about" className={styles.about}>
      <h2>About Malina</h2>
      <div className="flex">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          distinctio ut atque natus. Optio animi fuga, veritatis praesentium
          quisquam dolores modi dignissimos labore explicabo adipisci tempore
          reprehenderit id quo illum! Et dolorum ipsa ut aliquid ad ratione.
          Ipsum, tenetur fugiat, praesentium maiores officiis aut iure pariatur
          quo nisi accusamus quos.å
        </p>
        {/* <Image src={}/> */}
      </div>
    </main>
  );
};
export default About;
