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
			bgImgSrc: "images/hero-home-temp.jpg", // IMAGE NOT FINAL
			h1: "<em>Care,</em> Where You Live",
			h1Period: false,
			buttonText: "Learn More",
			buttonLink: "#",  // HYRULE IS IN DANGER! (NEED LINK)
			quoteText: "“We see the community as our family…we want to make a difference, from their medical needs, social needs, eligibility needs, financial needs — every patient is treated as an individual. These are people who truly care.”<span>- Deborah Forbes, VP of Operations, Doral Health and Wellness, part of the CINQCARE network</span>"
		};
	}

	// For Providers
	if (page == "providers") {
		content = {
			bgImgSrc: "images/hero-providers-temp.jpg", // IMAGE NOT FINAL
			h1: "Strengthening Community Care, <em>Together</em>",
			h1Period: true,
			buttonText: "Learn more about joining CINQCARE",
			buttonLink: "#",  // NEED LINK
			quoteText: "“CINQCARE isn’t just another network. They truly walk alongside providers, giving us the support we need to succeed in value-based care while keeping patient relationships at the center.”<span>- Dr. Wilfred Herard, MD — CEO of Proactive Care IPA</span>"
		};
	}

	// For Patients
	if (page == "patients") {
		content = {
			bgImgSrc: "images/hero-patients-temp.jpg", // IMAGE NOT FINAL
			h1: "Health and Care, <em>Right Where You Live</em>",
			h1Period: false,
			buttonText: "Find Support Near You",
			buttonLink: "/join-our-family",
			quoteText: "“To care for you where you live, that’s our calling.”<span>— Tony Welters – Founder and CEO</span>"
		};
	}

	// For Partners
	if (page == "partners") {
		content = {
			bgImgSrc: "images/hero-partners-temp.jpg", // IMAGE NOT FINAL
			h1: "Experts in Health and Care, Leading a <em>New Way Forward</em>",
			h1Period: false,
			buttonText: "Become a Partner",
			buttonLink: "/join-our-family",
			quoteText: "“It’s a pretty bold and audacious goal [CINQCARE has] set out, an opportunity to make some meaningful change with communities that need it..”<span>— Gary Bacher – XXX White House advisor and former CINQCARE Chief Strategy Officer</span>"
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
							className={content.h1Period ? ("period") : undefined}
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
