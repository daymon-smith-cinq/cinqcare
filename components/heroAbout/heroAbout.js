import styles from "./heroAbout.module.scss";
import Image from "next/image";
import Button from "../button/button";

const HeroAlt = ({ page }) => {
	// *******
	// Content
	// *******
	let content = "";

	// About
	if (page == "about") {
		content = {
			h1: "A Culture of Care, Driven by <em>Purpose</em>",
			h1Period: false,
			buttonText: "Meet our team",
			buttonLink: "#team",
			img1src: "/images/FoodDelivery.jpg",
				img1alt: "",
				img1width: "488",
				img1height: "364",
			img2src: "/images/WomenHugging.jpg",
				img2alt: "",
				img2width: "506",
				img2height: "667",
			img3src: "/images/VolunteerUnpacking.jpg",
				img3alt: "",
				img3width: "509",
				img3height: "339",
			quoteText:
				"“We are not a healthcare company  — <em>we are a health AND care company</em> — and that is a very distinct separation.”<span>— Gary Bacher - Rita Johnson-Mills, Head of Special Accounts Relationships, CINQCARE</span>",
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
					<div className={styles.heroColumns}>
						<div>
							<Image 
								priority={false} 
								src={content.img1src} 
								alt={content.img1alt}
								width={content.img1width}
								height={content.img1height}
							/>
						</div>
						<div>
							{content?.buttonLink && (
								<Button
									link={content.buttonLink}
									text={content.buttonText}
									type="outline-black"
								/>
							)}
							<Image 
								priority={false} 
								src={content.img2src} 
								alt={content.img2alt}
								width={content.img2width}
								height={content.img2height}
							/>
						</div>
						<div>
							<Image 
								priority={false} 
								src={content.img3src} 
								alt={content.img3alt}
								width={content.img3width}
								height={content.img3height}
							/>
						</div>

					</div>
				</div>
				<blockquote
					className={styles.heroQuote}
					dangerouslySetInnerHTML={{ __html: content.quoteText }}
				></blockquote>
			</div>
		</section>
	);
};

export default HeroAlt;
