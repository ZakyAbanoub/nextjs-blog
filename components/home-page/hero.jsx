import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/assets/zaky.jpg"
          alt="Abanoub Zaky"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Abanoub Zaky!</h1>
      <p>
        I blog web development - especially frontend frameworks like React or
        Vue.
      </p>
    </section>
  );
};

export default Hero;
