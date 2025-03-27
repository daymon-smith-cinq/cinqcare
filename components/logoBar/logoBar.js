import styles from "./logoBar.module.scss";

const LogoBar = ({ page }) => {
	let content = "";

	if (page === "home") {
		content = {
			heading: "Featured Members",
			logos: [
				{ logo: "logos/doralhw_logo.svg" },
				{ logo: "logos/Humana_logo.svg" },
				{ logo: "logos/cherokee_logo.svg" },
				{ logo: "logos/mfc_logo.svg" },
				{ logo: "logos/March_of_Dimes_logo.svg" },
			],
		};
	}

	return (
		<section className={styles.section_LogoBar}>
			<h4
				className={styles.heading_LogoBar}
				dangerouslySetInnerHTML={{ __html: content.heading }}
			/>
			<div className={styles.container_LogoBar}>
				{content.logos?.map((item, index) => (
					<img
						src={item.logo}
						alt={`Logo ${index + 1}`}
						key={index}
						loading="lazy"
					/>
				))}
			</div>
		</section>
	);
};

export default LogoBar;
