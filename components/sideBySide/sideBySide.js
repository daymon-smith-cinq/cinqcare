import styles from "./sideBySide.module.scss";
import Image from "next/image";
import Button from "../button/button";
import HomeImg from "/public/images/sidebyside-home-temp.webp";

const SideBySide = ({ page }) => {

	// *******
	// Content
	// *******

	// Alllll the options
	let content = {
		bgGradient: false,			
		columns: [
			{
				image: "",
					imgAlt: "",
					imgWidth: "",
					imgHeight: "",
				heading: "",
				headingPeriod: false,
				text: "",
				buttonLink: "",
				buttonText: "",
			},
			{
				image: "",
					imgAlt: "",
					imgWidth: "",
					imgHeight: "",
				heading: "",
				headingPeriod: false,
				text: "",
				buttonLink: "",
				buttonText: "",
			},
		],
	};

	// Homepage
	if (page == "home") {
		content = {
			bgGradient: true,			
			columns: [
				{
					image: HomeImg, // TEMP IMAGE
						imgAlt: "A young Black nurse sits side-by-side with an elderly white woman. The nurse has her arm around the older woman's shoulders and the older woman is leaning into the embrace. Both are laughing and comfortable together, like they have known each other for a long time. The backdrop is of a city neighborhood.",
						imgWidth: "665",
						imgHeight: "440",
				},
				{
					heading: "<big>This is for the communities <em>that raised us</em></big>",
					headingPeriod: false,
					buttonLink: "/about",
					buttonText: "Our Mission",
				},
			],
		};
	}

	return (
		<section className={`${styles.section_sideBySide} ${content.bgGradient ? (styles.gradient) : undefined}`}>
			<div className={`${styles.container_sideBySide} ${" wrapper"}`}>
				<div className={styles.columnContainer}>
					{content.columns &&
					content.columns.map((column, columnIndex) => (
						<div 
							key={columnIndex}
							className={styles.column}
						>
							{column?.image && (
								<Image 
									priority={false} 
									src={column.image} 
									alt={column.imgAlt} 
									width={column.imgWidth} 
									height={column.imgHeight}
								/>
							)}
							{column?.heading && (
								<h2
									className={`${styles.heading} ${column.headingPeriod ? ("period") : undefined}`}
									dangerouslySetInnerHTML={{ __html: column.heading }}
								></h2>
							)}
							{column?.text && (
								<div
									className={styles.textContainer}
									dangerouslySetInnerHTML={{ __html: column.text }}
								></div>
							)}
							{column?.buttonLink && (
								<Button 
									link={column.buttonLink}
									text={column.buttonText}
								/>
							)}
						</div>
					))}	
				</div>
			</div>
		</section>
	);
};

export default SideBySide;
