import styles from "./cards.module.scss";
import buffaloMap from '../../public/cards--buffalo.svg';
import brooklynMap from '../../public/cards--brooklyn.svg';
import Button from "../button/button";

const Cards = () => {
  return (
    <section className={styles.cards}>
      <div className={`${styles.wrapper} wrapper`}>

        <header className={styles.section__header}>
          <h2 className="period">Find <em>Grace at Home</em> Near You</h2>
          <p>Care Medical Practices are expanding to serve more communities.</p>
          <Button 
            link={ '/' }
            text={ 'Contact Us' }
          />
        </header>

        <div className={styles.card__item}>
          <header>
            <div>
              <h2><em>Buffalo</em>, NY</h2>
              <address>
                564 Niagara Street,<br />
                Buffalo, NY<br />
                14201 716.882.0366
              </address>
            </div>
            <img src={buffaloMap.src} />
          </header>
          <p>On-site lab services, specialty care, and integrated support</p>
        </div>

        <div className={styles.card__item}>
          <header>
            <div>
              <h2><em>Brooklyn</em>, NY</h2>
              <address>
                3 22 Linden Boulevard,<br />
                Ground Floor, Brooklyn,<br />
                NY 11226<br />
                718.469.5500
              </address>
            </div>
            <img src={brooklynMap.src} />
          </header>
          <p>Comprehensive primary and specialty care</p>
        </div>
        
      </div>
    </section>
  );
};

export default Cards;