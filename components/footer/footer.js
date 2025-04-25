import { useRouter } from "next/router";
import logo from "../../public/logo.svg";
import facebook from "../../public/logo--facebook.svg";
import linkedin from "../../public/logo--linkedin.svg";
import instagram from "../../public/logo--instagram.svg";
import Button from "../button/button";
import styles from "./footer.module.scss";

const Footer = () => {
	const router = useRouter();
	const currentPath = router.pathname;
	const isJoinPage = currentPath === "/join-our-family";

	return (
		<footer
			className={`${styles.footer__main} ${
				isJoinPage ? styles.minimalLayoutMain : ""
			}`}
		>
			<div className={`${styles.wrapper} ${" wrapper"}`}>
				<div
					className={`${styles.footer__content} ${
						isJoinPage ? styles.minimalLayout : ""
					}`}
				>
					<a href="/" className={styles.container__logo}>
						<img
							src={logo.src}
							alt="Footer logo"
							className={styles.footer__logo}
						/>
					</a>

					{currentPath !== "/join-our-family" && (
						<nav className={styles.footer__nav}>
							<div>
								<header>Who We Serve</header>
								<ul>
									<li>
										<a href="/for-providers">Providers</a>
									</li>
									<li>
										<a href="/for-patients">Patients</a>
									</li>
									<li>
										<a href="/for-partnerships">Payers</a>
									</li>
								</ul>
							</div>

							<div>
								<header>Services</header>
								<ul>
									<li>
										{/* <a href="https://grace-at-home.care/" target="_blank">
											Grace at Home
										</a> */}
										<a href="/grace-at-home">Grace at Home</a>
									</li>
									<li>
										<a href="/for-moms">CINQCARE for Moms</a>
									</li>
									<li>
										<a href="/care-medical-practice">Care Medical Practice</a>
									</li>
									{/*<li>
										<a href="https://aco.cinq.care/" target="_blank">
											ACO REACH
										</a>
									</li>*/}
								</ul>
							</div>

							<div>
								<header>Community</header>
								<ul>
									<li>
										<a href="/communities">Community</a>
									</li>
								</ul>
							</div>

							<div>
								<header>Company</header>
								<ul>
									<li>
										<a href="/about">About Us</a>
									</li>
									<li>
										<a href="/careers-with-a-calling">Careers</a>
									</li>
								</ul>
							</div>
						</nav>
					)}
					{currentPath !== "/join-our-family" && (
						<div className={styles.footer__hero}>
							<header>
								<h2>
									<em>More Than Healthcare</em> — A Movement for Those Who Need
									It Most.
								</h2>
							</header>
							<Button link="/join-our-family" text="Join Our Family" />
						</div>
					)}
					<div className={styles.footer__info}>
						<nav className={styles.footer__subnav}>
							<div>
								<header>Social</header>
								<ul>
									<li>
										<a
											href="https://www.facebook.com/cinqcarewhereyoulive"
											target="_blank"
										>
											<img src={facebook.src} alt="Facebook logo" />
										</a>
									</li>
									<li>
										<a
											href="https://www.linkedin.com/company/cinq-care/"
											target="_blank"
										>
											<img src={linkedin.src} alt="Linkedin logo" />
										</a>
									</li>
									<li>
										<a
											href="https://www.instagram.com/cinq.care/"
											target="_blank"
										>
											<img src={instagram.src} alt="Instagram logo" />
										</a>
									</li>
								</ul>
							</div>

							<div>
								<header>Contact Us</header>
								<ul>
									<li>
										<a href="tel:(844) 401-4663">(844) 401-4663</a>
									</li>
								</ul>
							</div>
						</nav>

						<nav className={styles.footer__policy}>
							<a href="/privacy-policy">Privacy Policy</a>
							<a href="/privacy-policy-grace-at-home">
								Grace at Home Privacy Policy
							</a>
						</nav>

						<p>© {new Date().getFullYear()} CINQCARE. All rights reserved.</p>
					</div>
				</div>
				{currentPath !== "/join-our-family" && (
					<div className={styles.footer__hero}>
						<header>
							<h2>
								<em>More Than Healthcare</em> — A Movement for Those Who Need It
								Most.
							</h2>
						</header>
						<Button link="/join-our-family" text="Join Our Family" />
					</div>
				)}
			</div>
		</footer>
	);
};

export default Footer;
