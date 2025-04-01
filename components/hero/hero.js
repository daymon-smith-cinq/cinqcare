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
			buttonLink: "/join-our-family",
			blockquoteBorder: false,
			quoteText:
				"“We see the community as our family…we want to make a difference, from their medical needs, social needs, eligibility needs, financial needs — every patient is treated as an individual. These are people who truly care.”<span>- Deborah Forbes, VP of Operations, Doral Health and Wellness, part of the CINQCARE network</span>",
		};
	}

	// For Providers
	if (page == "providers") {
		content = {
			bgImgSrc: "images/hero-providers.jpg",
			h1: "Strengthening Community Care, <em>Together</em>",
			h1Period: true,
			buttonText: "Learn more about joining CINQCARE",
			buttonLink: "/join-our-family",
			blockquoteBorder: false,
			quoteText:
				"“CINQCARE isn't just another network. They truly walk alongside providers, giving us the support we need to succeed in value-based care while keeping patient relationships at the center.”<span>- Dr. Wilfred Herard, MD — CEO of Proactive Care IPA</span>",
		};
	}

	// For Patients
	if (page == "patients") {
		content = {
			bgImgSrc: "images/hero-patients.jpg",
			h1: "Health and Care, <em>Right Where You Live</em>",
			h1Period: false,
			buttonText: "Find Support Near You",
			buttonLink: "/join-our-family",
			blockquoteBorder: false,
			quoteText:
				"“To care for you where you live, that's our calling.”<span>— Tony Welters - Founder and CEO</span>",
		};
	}

	// For Partners
	if (page == "partners") {
		content = {
			bgImgSrc: "images/hero-partners.jpg",
			h1: "Experts in Health and Care, Leading a <em>New Way Forward</em>",
			h1Period: false,
			buttonText: "Become a Partner",
			buttonLink: "/join-our-family",
			blockquoteBorder: false,
			quoteText:
				"“It's a pretty bold and audacious goal [CINQCARE has] set out, an opportunity to make some meaningful change with communities that need it..”<span>— Gary Bacher - XXX White House advisor and former CINQCARE Chief Strategy Officer</span>",
		};
	}

	// Careers
	if (page == "careers") {
		content = {
			bgImgSrc: "images/hero-partners-temp.jpg", // IMAGE NOT FINAL
			h1: "<span>Open Positions</span>Why CINQCARE may be <em>your calling</em>",
			h1Period: false,
			buttonText: "",
			buttonLink: "",
			blockquoteBorder: true,
			quoteText:
				"Caregivers are born to care. It’s more than a job—it’s a calling. We’re committed to delivering health, care, and well-being to those who need it most, especially in high-needs communities.",
		};
	}

	// Communities
	if (page == "communities") {
		content = {
			bgImgSrc: "images/PeopleGathering.jpg",
			h1: "We are in this together — <em>members of one family</em>",
			h1Period: false,
			buttonText: "",
			buttonLink: "",
			blockquoteBorder: false,
			quoteText:
				"“I created CINQCARE to answer the call to every day deliver health, care, and well-being to those who need care the most, with a deep commitment to high-needs, urban, and rural communities.”<span>– Founder Tony Welters</span>",
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
							className={content.h1Period ? "period" : undefined}
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
						className={`${styles.heroQuote} ${
							content.blockquoteBorder ? styles.border : ""
						}`}
						dangerouslySetInnerHTML={{ __html: content.quoteText }}
					></blockquote>
				</div>
			</div>
		</section>
	);
};

export default Hero;
