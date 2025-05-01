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
			<header id="header" className={`${styles.header} ${bgColor}`}>
				<div className={`${styles.wrapper} ${" wrapper"}`}>
					<div className={styles.headerNav}>
						<a href="https://cinq.care/" className={styles.logo}>
							<Image priority={true} src={logoSrc} alt="Cinqcare Logo" />
						</a>
						{currentPath !== "/" &&
							currentPath !== "/privacy-policy-grace-at-home" && (
								<div className={styles.spacer}></div>
							)}
						{currentPath !== "/" &&
							currentPath !== "/privacy-policy-grace-at-home" && (
								<label
									htmlFor="responsiveMenuToggle"
									className={`${styles.responsiveMenuToggleLabel} ${bgColor}`}
								>
									Menu
								</label>
							)}
						{currentPath !== "/" &&
							currentPath !== "/privacy-policy-grace-at-home" && (
								<input
									type="checkbox"
									id="responsiveMenuToggle"
									className={styles.responsiveMenuToggleInput}
								/>
							)}
						{currentPath !== "/" &&
							currentPath !== "/privacy-policy-grace-at-home" && (
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
													<a href="/for-providers">For Providers</a>
												</li>
												<li>
													<a href="/for-patients">For Patients</a>
												</li>
												<li>
													<a href="/for-partners">For Partners</a>
												</li>
											</ul>
										</li>
										<li className={styles.hasSubmenu}>
											<a aria-expanded="false">Our Services</a>
											<ul className={styles.submenu}>
												<li>
													<a href="/grace-at-home">Grace at Home</a>
												</li>
												<li>
													<a href="/for-moms">CINQCARE for Moms</a>
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
						{currentPath !== "/" &&
							currentPath !== "/privacy-policy-grace-at-home" && (
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
