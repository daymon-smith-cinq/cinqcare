import styles from "./heroAbout.module.scss";
import Image from "next/image";
import Button from "../button/button";

const HeroAbout = ({ page }) => {

	// *******
	// Content
	// *******
	let content = "";

	// About
	if (page == "about") {
		content = {
			h1: "A Culture of Care, Driven by <em>Purpose</em>",
			h1Period: false,
			buttonText: "Meet Our Team",
			buttonLink: "#leadership",
			quoteText: "“We are not a healthcare company  — we are a health AND care company — and that is a very distinct separation.”  <span>- Rita Johnson-Mills, Head of Special Accounts Relationships, CINQCARE</span>",
			img1src: "images/hero-about-1.jpg", // IMAGE NOT FINAL
			img2src: "images/hero-about-2.jpg", // IMAGE NOT FINAL
			img3src: "images/hero-about-3.jpg", // IMAGE NOT FINAL
		};
	}

	return (
		<section className={styles.section_Hero}>
			<div className={`${styles.container_Hero} ${" wrapper"}`}>
				<div className={styles.heroContent}>
					<div>
						<h1 
							className={content.h1Period ? ("period") : undefined}
							dangerouslySetInnerHTML={{ __html: content.h1 }}
						></h1>
						{content?.buttonLink && (
							<Button 
								link={content.buttonLink}
								text={content.buttonText}
								type="outline"
							/>
						)}
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

export default HeroAbout;
