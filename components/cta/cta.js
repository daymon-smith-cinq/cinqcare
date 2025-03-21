import styles from "./cta.module.scss";
import Button from "../button/button";

const CTA = () => {
  return (
    <section className={styles.cta__main}>
      <div className={`${styles.wrapper} ${" wrapper"}`}>
        <header>
          <h2>Join the <em>CINQCARE</em> Family.</h2>
        </header>
        <p>We’d love to explore opportunities for providers, patients, and partners in your area.</p>
        <Button 
          link="/"
          text="Connect with Us"
          type="secondary"
        />
      </div>
    </section>
  );
};

export default CTA;