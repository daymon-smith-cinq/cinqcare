import styles from "./masonryImages.module.scss";
import image1 from "../../public/images/HoldingHands.jpg";
import image2 from "../../public/images/ManFood.jpg";
import image3 from "../../public/images/Nurse-helping-woman-stand.jpg"
import image4 from "../../public/images/WomanShot.jpg"

const MasonryImages = () => {
  return (
    <section className={styles.home__masonry}>
      <div className={`${styles.masonry__header} ${" wrapper"}`}>
        <header>
          <h2 className="period">Going <em>Beyond</em> Medical Care</h2>
        </header>
        <div>
          <p>Whether you need primary care, urgent visits, medications, mobility, food access, caregiver support, or help managing chronic conditions, we create a plan just for you.</p>

          <p>Covered by Medicare and Most Insurance — We believe quality care should be accessible to everyone who needs it.</p>
        </div>
      </div>
      <div className="wrapper">
        <div className={styles.masonry}>
          <div className={styles.masonry__column}>
            <div className={styles.masonry__item}>
            <img src={image1.src} alt="Image 1" />
            </div>

            <div className={styles.masonry__item}>
              <img src={image2.src} alt="Image 2" />
            </div>
          </div>


          <div className={styles.masonry__column}>
            <div className={styles.masonry__item}>
            <img src={image3.src} alt="Image 3" />
            </div>
          </div>


          <div className={styles.masonry__column}>
            <div className={styles.masonry__item}>
            <img src={image4.src} alt="Image 4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasonryImages;