import styles from "./heroAlt.module.scss";
import Image from "next/image";
import Button from "../button/button";

const HeroAlt = ({ page }) => {
	// *******
	// Content
	// *******
	let content = "";

	// Homepage
	if (page == "grace-at-home") {
		content = {
			heroImage: "images/hero-home-temp.jpg", // IMAGE NOT FINAL
			h1: "<span>Grace at Home</span> Bringing <em>Health and Care</em> to You",
			h1Period: false,
			paragraph: "Healthcare shouldn't be out of reach. <br> We bring it home.",
			buttonText: "Visit Site",
			buttonLink: "/#", // HYRULE IS IN DANGER! (NEED LINK)
		};
	}

	return (
		<section className={styles.section_Hero}>
			<div className={`${styles.container_Hero} ${" wrapper"}`}>
				<div className={styles.heroContent}>
					<h1
						className={content.h1Period ? "period" : undefined}
						dangerouslySetInnerHTML={{ __html: content.h1 }}
					></h1>
					{content?.paragraph && (
						<p dangerouslySetInnerHTML={{ __html: content.paragraph }}></p>
					)}
					{content?.buttonLink && (
						<Button
							link={content.buttonLink}
							text={content.buttonText}
							type="outline-black"
						/>
					)}
				</div>
				<div className={styles.heroImage}>
					<img src={content.heroImage} />
				</div>
			</div>
		</section>
	);
};

export default HeroAlt;
