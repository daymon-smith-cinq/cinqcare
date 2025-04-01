import styles from "./heroAlt.module.scss";
import Image from "next/image";
import Button from "../button/button";

const HeroAlt = ({ page }) => {
	// *******
	// Content
	// *******
	let content = "";

	if (page == "grace-at-home") {
		content = {
			heroImage: "images/ManNurse.jpg",
			h1: "<span>Grace at Home</span> Bringing <em>Health and Care</em> to You",
			h1Period: false,
			paragraph: "Healthcare shouldn't be out of reach. <br> We bring it home.",
			buttonText: "Visit Site",
			buttonLink: "/#", // HYRULE IS IN DANGER! (NEED LINK)
		};
	}

	if (page == "for-moms") {
		content = {
			heroImage: "images/HappyPregnantCouple.jpg",
			h1: "<span>CINQCARE for Moms</span> Motherhood, with the <em>Support You Deserve</em>",
			h1Period: false,
			paragraph:
				"You're always there for everyone else. <br> We're here for you.",
			buttonText: "",
			buttonLink: "", // HYRULE IS IN DANGER! (NEED LINK)
		};
	}

	if (page == "care-medical-practice") {
		content = {
			heroImage: "images/DoctorTeen.jpg",
			h1: "<span>Care Medical Practice</span> Trusted Care, Right in Your Neighborhood",
			h1Period: false,
			paragraph:
				"Comprehensive, quality primary and specialty care — delivered with compassion and convenience. <span>Find expert medical care close to home, designed to keep you well and thriving.</span>",
			buttonText: "",
			buttonLink: "", // HYRULE IS IN DANGER! (NEED LINK)
		};
	}

	if (page == "thank-you") {
		content = {
			heroImage: "images/DoctorTeen.jpg", // IMAGE NOT FINAL
			h1: "<b>Thank you</b> for <em>your interest!</em>",
			h1Period: false,
			paragraph: "We will be in contact soon.",
			buttonText: "",
			buttonLink: "", // HYRULE IS IN DANGER! (NEED LINK)
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
