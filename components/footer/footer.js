import styles from "./footer.module.scss";
import logo from "../../public/logo.svg";
import facebook from "../../public/logo--facebook.svg";
import linkedin from "../../public/logo--linkedin.svg";
import instagram from "../../public/logo--instagram.svg";
import Button from "../button/button";

const Footer = () => {
	return (
		<footer className={styles.footer__main}>
      <div className={`${styles.wrapper} ${" wrapper"}`}>
        <div className={styles.footer__content}>
          <img src={logo.src} alt="Footer logo" className={styles.footer__logo} />

          <nav className={styles.footer__nav}>
            <div>
              <header>Who We Serve</header>
              <ul>
                <li><a href="">Providers</a></li>
                <li><a href="">Patients</a></li>
                <li><a href="">Partners</a></li>
              </ul>
            </div>

            <div>
              <header>Our Services</header>
              <ul>
                <li><a href="">Services</a></li>
              </ul>
            </div>

            <div>
              <header>Community</header>
              <ul>
                <li><a href="">Community</a></li>
              </ul>
            </div>

            <div>
              <header>About the Company</header>
              <ul>
                <li><a href="">About Us</a></li>
                <li><a href="">Careers</a></li>
              </ul>
            </div>
          </nav>

          <div className={styles.footer__hero}>
            <header>
              <h2><em>More Than Healthcare</em> —  A Movement for Those Who Need It Most.</h2>
            </header>
            <Button 
              link="/"
              text="Join Our Family"
            />
          </div>

          <div className={styles.footer__info}>
            <nav className={styles.footer__subnav}>
              <div>
                <header>Social</header>
                <ul>
                  <li><a href=""><img src={facebook.src} alt="Facebook logo" /></a></li>
                  <li><a href=""><img src={linkedin.src} alt="Linkedin logo" /></a></li>
                  <li><a href=""><img src={instagram.src} alt="Instgram logo" /></a></li>
                </ul>
              </div>

              <div>
                <header>Contact Us</header>
                <ul>
                  <li><a href="tel:(844) 401-4663">(844) 401-4663</a></li>
                </ul>
              </div>
            </nav>

            <nav className={styles.footer__policy}>
              <a href="">Privacy Policy</a>
              <a href="">Terms & Conditions</a>
              <a href="">Cookie Preferences</a>
              <a href="">Accessibility</a>
              <a href="">Cookie Preferences</a>
            </nav>

            <p>© 2025 CINQCARE. All rights reserved.</p>
          </div>
        </div>

        <div className={styles.footer__hero}>
          <header>
            <h2><em>More Than Healthcare</em> —  A Movement for Those Who Need It Most.</h2>
          </header>
          <Button 
            link="/"
            text="Join Our Family"
          />
        </div>
      </div>
    </footer>
	);
};

export default Footer;