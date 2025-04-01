import styles from "./masonryText.module.scss";

const MasonryText = () => {
  return (
    <section className={styles.home__masonry}>
      <div className={`${styles.masonry__header} ${" wrapper"}`}>
        <header>
          <h2>What do <em>people say</em> about us?</h2>
        </header>
        <div>
          
        </div>
      </div>
      <div className="wrapper">
        <div className={styles.masonry}>
          <div className={styles.masonry__column}>
            <div className={styles.masonry__item}>
              <div className={styles.item__content}>
                <blockquote>
                  <p>“Being with the right navigator at the right time is like godsend. She went above and beyond to assist me.”</p>

                  <cite>Diana, Family Member of CINCARE Health Home</cite>
                </blockquote>
              </div>
            </div>

            <div className={styles.masonry__item}>
              <div className={styles.item__content}>
                <blockquote>
                  <p>“[The family] was so open, so willing, and really preferred the in-home specialist visit vs going anywhere else and trying to wait and get transportation. That was really rewarding.”</p>

                  <cite>Alicia, a CINQCARE care coordinator</cite>
                </blockquote>
              </div>
            </div>
          </div>


          <div className={styles.masonry__column}>
            <div className={styles.masonry__item}>
              <div className={styles.item__content}>
                <blockquote>
                  <p>“They have very good programs. My workers, like Alicia, Uling and Sonia and nurse Kim, they come to my home, visit me…They are not like workers, they are like family members for me.”</p>

                  <cite>Hina, Family Member of Healthy Start for Buffalo</cite>
                </blockquote>
              </div>
            </div>
          </div>


          <div className={styles.masonry__column}>
          <div className={styles.masonry__item}>
              <div className={styles.item__content}>
                <blockquote>
                  <p>“We wanted to make this a place that brings safety, brings love, brings art and beauty, compassion and dignity.”</p>

                  <cite>Dr. Denise Christian, CINQCARE Chief Medical Officer</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasonryText;