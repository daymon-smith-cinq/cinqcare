import styles from "./hero.module.scss";
import Image from "next/image";
import Button from "../button/button";

const Hero = ({ page }) => {

	// *******
	// Content
	// *******
	let content = "";

	// Homepage
	if (page == "home") {
		content = {
			bgImgSrc: "images/hero-home.jpg",
			h1: "<em>Care,</em> Where You Live",
			h1Period: false,
			buttonText: "Learn More",
			buttonLink: "#",
			quoteText: "“We see the community as our family…we want to make a difference, from their medical needs, social needs, eligibility needs, financial needs — every patient is treated as an individual. These are people who truly care.”<span>- Deborah Forbes, VP of Operations, Doral Health and Wellness, part of the CINQCARE network</span>"
		};
	}

	// Providers
	if (page == "providers") {
		content = {
			bgImgSrc: "images/hero-providers.jpg",
			h1: "<em>Strengthening</em> Community-Based Care, Together",
			h1Period: true,
			buttonText: "Learn More",
			buttonLink: "#",
			quoteText: "“CINQCARE isn’t just another network. They truly walk alongside providers, giving us the support we need to succeed in value-based care while keeping patient relationships at the center.”<span>- Dr. Wilfred Herard, MD — CEO of Proactive Care IPA</span>"
		};
	}

	return (
		<section 
			className={styles.section_Hero}
			style={{
				backgroundImage: `url(${content.bgImgSrc})`,
			}}
		>
			<div className={`${styles.container_Hero} ${" wrapper"}`}>
				<div className={styles.heroContent}>
					<div>
						<h1 
							className={styles.heroH1} 
							dangerouslySetInnerHTML={{ __html: content.h1 }}
						></h1>
						<Button 
							link={content.buttonLink}
							text={content.buttonText}
							type="outline"
						/>
					</div>
					<blockquote
						className={styles.heroQuote} 
						dangerouslySetInnerHTML={{ __html: content.quoteText }}
					></blockquote>
				</div>
			</div>
		</section>
	);
};

export default Hero;
