import styles from "./masonry.module.scss";
import buffaloMap from '../../public/masonry--map-buffalo.svg';
import brooklynMap from '../../public/masonry--map-brooklyn.svg';
import Button from "../button/button";

const Masonry = () => {
  return (
    <section className={styles.home__masonry}>
      <div className={`${styles.masonry__header} ${" wrapper"}`}>
        <header>
          <h2><em>Millions of people</em>, live with chronic and preventable health conditions.</h2>
        </header>
        <div>
          <p>We are working together with our communities to change that.<br />
          It's our calling to deliver care where you live. </p>
          <Button 
            link="/"
            text="About Us"
          />
        </div>
      </div>
      <div className="wrapper">
        <div className={styles.masonry}>
          <div className={styles.masonry__column}>
            <div className={styles.masonry__item} style={{'--item-bg': 'url(https://loremflickr.com/500/473)'}}>
              <div className={styles.item__content}>
                <div className={styles.item__info}>
                  <div className={styles.item__data}>
                    <p>
                      <strong>Kathy Biddle</strong><br />
                      Buffalo, NY
                    </p>
                    <p>
                      <strong>Patient Time</strong><br />
                      3 Years
                    </p>
                  </div>
                  <img src={buffaloMap.src} alt="" />
                </div>
                <p>"Thanks to Dr. Bennett and CINQCARE, I’ve regained my strength and confidence, thriving in life after chemo."</p>
              </div>
              <img src="https://loremflickr.com/500/473" alt="Placeholder" />
            </div>

            <div className={styles.masonry__item}>
              <div className={styles.item__content}>
                <div className={styles.item__info}>
                  <div className={styles.item__data}>
                    <p>
                      <strong>Maria Morales</strong><br />
                      Brooklyn, NY
                    </p>
                    <p>
                      <strong>Patient Time</strong><br />
                      2 Years
                    </p>
                  </div>
                  <img src={brooklynMap.src} alt="" />
                </div>
                <p>"Dr. Miller and CINQCARE have helped me take control of my heart health, giving me the confidence to live my life to the fullest."</p>
              </div>
              <img src="https://loremflickr.com/500/600" alt="Placeholder" />
            </div>
          </div>


          <div className={styles.masonry__column}>
            <div className={styles.masonry__item}>
              <div className={styles.item__content}>
                <div className={styles.item__info}>
                  <div className={styles.item__data}>
                    <p>
                      <strong>Matthew Trout</strong><br />
                      Buffalo, NY
                    </p>
                    <p>
                      <strong>Patient Time</strong><br />
                      4.2 Years
                    </p>
                  </div>
                  <img src={buffaloMap.src} alt="" />
                </div>
                <p>“CINQCARE has helped me get back into my daily life and  daily routine. Dr. John has helped managed my condition to  excel in daily life.”</p>
              </div>
              <img src="https://loremflickr.com/500/829" alt="Placeholder" />
            </div>
          </div>


          <div className={styles.masonry__column}>
            <div className={styles.masonry__item}>
              <div className={styles.item__content}>
                <div className={styles.item__info}>
                  <div className={styles.item__data}>
                    <p>
                      <strong>Charles Kent</strong><br />
                      Buffalo, NY
                    </p>
                    <p>
                      <strong>Patient Time</strong><br />
                      1.5 Years
                    </p>
                  </div>
                  <img src={buffaloMap.src} alt="" />
                </div>
                <p>"Thanks to Dr. Hayes and CINQCARE, my condition is well-managed, allowing me to thrive in my daily life."</p>
              </div>
              <img src="https://loremflickr.com/500/450" alt="Placeholder" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masonry;