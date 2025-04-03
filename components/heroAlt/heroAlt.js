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
			paragraph: "",
			buttonText: "Visit Site",
			buttonLink: "#", // Need final link
			buttonTarget: "_blank",
			quoteText: "“At Grace at Home, we believe health and care should come to you, not the other way around.” <span>— Traci Miller, President, Grace at Home</span>",
		};
	}

	if (page == "for-moms") {
		content = {
			heroImage: "images/HappyPregnantCouple.jpg",
			h1: "<span>CINQCARE for Moms</span> Motherhood, with the <em>Support You Deserve</em>",
			h1Period: false,
			paragraph:
				"You're always there for everyone else. <br> We're here for you.",
			buttonText: "Visit Site",
			buttonLink: "https://formoms.cinq.care/",
			buttonTarget: "_blank",
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
			buttonLink: "",
		};
	}

	if (page == "thank-you") {
		content = {
			heroImage: "images/Family.jpg",
			h1: "<b>Thank you</b> for <em>your interest!</em>",
			h1Period: false,
			paragraph: "We will be in contact soon.",
			buttonText: "",
			buttonLink: "",
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
							target={content.buttonTarget ? `${content.buttonTarget}` : "_self"}
							type="outline-black"
						/>
					)}
					{content?.quoteText && (
						<blockquote 
							className={styles.heroQuote}
							dangerouslySetInnerHTML={{ __html: content.quoteText }}
						></blockquote>
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
