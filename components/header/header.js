import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./header.module.scss";
import Image from "next/image";
import Logo from "../../public/cinqcare-logo.svg";
import ReversedLogo from "../../public/cinqcare-logo-reverse.svg";

const Header = ({ headerBg }) => {
	const router = useRouter();
	const currentPath = router.pathname;

	// Dark bg
	let bgColor = styles.light;
	if (headerBg == "dark") {
		bgColor = styles.dark;
	}

	// Swap logo if dark bg
	const logoSrc = headerBg == "dark" ? ReversedLogo : Logo;

	// TODO: Add aria-expanded to menu dropdowns
	const [ariaExpanded, setAria] = useState("false");
	const toggleAriaExpanded = () => {
		if (ariaExpanded !== "false") setAria("false");
		else setAria("true");
	};

	return (
		<>
			{currentPath !== "/join-our-family" && (
				<a href="https://www.prnewswire.com/news-releases/cinqcare-announces-dr-jessica-henderson-boyd-as-cmo-302435110.html" target="_blank">
					<div className={`${styles.notificationBar} ${" notificationBar"}`}>
						<div className={`${styles.wrapper} ${" wrapper"}`}>
							<div className={styles.info}>
								<div className={styles.category}><span>NEWS</span></div>
								<div className={styles.title}><span>Announcing Dr. Jessica Henderson Boyd as Chief Medical Officer</span></div>
								<div className={styles.date}><span>April 23, 2025</span></div>
							</div>
							{/*<div className={styles.link}><span>Read More</span></div>*/}
						</div>
					</div>
				</a>
			)}
			<header id="header" className={`${styles.header} ${bgColor}`}>
				<div className={`${styles.wrapper} ${" wrapper"}`}>
					<div className={styles.headerNav}>
						<a href="/" className={styles.logo}>
							<Image priority={true} src={logoSrc} alt="Cinqcare Logo" />
						</a>
						{currentPath !== "/join-our-family" && (
							<div className={styles.spacer}></div>
						)}
						{currentPath !== "/join-our-family" && (
							<label
								htmlFor="responsiveMenuToggle"
								className={`${styles.responsiveMenuToggleLabel} ${bgColor}`}
							>
								Menu
							</label>
						)}
						{currentPath !== "/join-our-family" && (
							<input
								type="checkbox"
								id="responsiveMenuToggle"
								className={styles.responsiveMenuToggleInput}
							/>
						)}
						{currentPath !== "/join-our-family" && (
							<nav id="nav" role="navigation" aria-label="Main">
								<ul id="menu" className={styles.menu}>
									<li
										className={styles.hasSubmenu}
										onMouseEnter={toggleAriaExpanded}
										onMouseLeave={toggleAriaExpanded}
									>
										<a aria-expanded={ariaExpanded}>Who We Serve</a>
										<ul className={styles.submenu}>
											<li>
												<a href="/providers">Providers</a>
											</li>
											<li>
												<a href="/patients">Patients</a>
											</li>
											<li>
												<a href="/payers">Payers</a>
											</li>
										</ul>
									</li>
									<li className={styles.hasSubmenu}>
										<a aria-expanded="false">Services</a>
										<ul className={styles.submenu}>
											<li>
												{/* <a href="https://grace-at-home.care/" target="_blank">
													Grace at Home
												</a> */}
												<a href="/grace-at-home">Grace at Home</a>
											</li>
											<li>
												<a href="/moms">CINQCARE for Moms</a>
											</li>
											<li>
												<a href="/care-medical-practice">
													Care Medical Practice
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="/communities">Community</a>
									</li>
									<li>
										<a href="/about">About</a>
									</li>
								</ul>
							</nav>
						)}
						{currentPath !== "/join-our-family" && (
							<a className={styles.menu_cta} href="/join-our-family">
								Join Our Family
							</a>
						)}
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
