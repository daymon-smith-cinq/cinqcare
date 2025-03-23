import React, { useState } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Logo from "../../public/cinqcare-logo.svg";
import ReversedLogo from "../../public/cinqcare-logo-reverse.svg";
import Button from "../button/button";

const Header = ({ headerBg }) => {

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
						<a href="/" className={styles.logo}>
							<Image priority={true} src={logoSrc} alt="Cinqcare Logo" />
						</a>
						<label htmlFor="responsiveMenuToggle" className={styles.responsiveMenuToggleLabel}>Menu</label>
						<input type="checkbox" id="responsiveMenuToggle" className={styles.responsiveMenuToggleInput}/>
						<nav id="nav" role="navigation" aria-label="Main">
							<ul id="menu" className={styles.menu}>
								<li 
									className={styles.hasSubmenu}
									onMouseEnter={toggleAriaExpanded}
									onMouseLeave={toggleAriaExpanded}
								>
									<a 
										aria-expanded={ariaExpanded}
									>
										Who We Serve
									</a>
									<ul className={styles.submenu}>
										<li><a href="/providers">For Providers</a></li>
										<li><a href="#">For Patients</a></li>
										<li><a href="#">For Partners</a></li>
									</ul>
								</li>
								<li className={styles.hasSubmenu}>
									<a aria-expanded="false">
										Our Services
									</a>
									<ul className={styles.submenu}>
										<li><a href="#">Grace at Home</a></li>
										<li><a href="#">CINQCARE for Moms</a></li>
										<li><a href="#">Care Medical Practice</a></li>
									</ul>
								</li>
								<li><a href="#">Community</a></li>
								<li><a href="#">About</a></li>
							</ul>
						</nav>
						<Button 
							link="#"
							text="Join Our Family"
						/>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
