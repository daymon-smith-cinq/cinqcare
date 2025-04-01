import styles from "./sideBySide.module.scss";
import Image from "next/image";
import Button from "../button/button";
import HomeImg from "/public/images/sidebyside-home.jpg";
import AboutImg from "/public/images/WomanSmiling-about.jpg";
import GraceImg from "/public/images/NurseHuggingWoman.jpg";
import Grace2Img from "/public/images/NurseFrontDoor.jpg";
import MomsImg from "/public/images/WomenPregnancyTest.jpg";
import Moms2Img from "/public/images/Babymother.jpg";

const SideBySide = ({ page, num }) => {

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
				subheading: "",
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
				subheading: "",
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
					image: HomeImg,
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
	} else if (page == "about") {
		content = {
			bgGradient: false,			
			columns: [
				{
					image: AboutImg,
						imgAlt: "",
						imgWidth: "665",
						imgHeight: "440",
				},
				{
					subheading: "<em>Care is a Calling</em>",
					heading: "It’s more than a job. It’s a purpose. It’s a calling. If it’s your goal to deliver care where you live, let’s work together.",
					headingPeriod: false,
					buttonLink: "/careers",
					buttonText: "Open Positions",
				},
			],
		};
	} else if (page == "grace-at-home" && num == "first") {
		content = {
			bgGradient: false,			
			columns: [
				{
					heading: "What <em>We</em> Do",
					headingPeriod: true,
					text: "<h4>Primary and Preventive Care — at Home</h4>" +
					"<p>Checkups that don’t rush, help with your medications, and support in managing your chronic conditions, including diabetes, heart disease, and COPD. We also will help you recover safely at home after a hospital stay.</p>" +
					"<h4>Urgent and Acute Care — at Home</h4>" +
					"<p>Skip the wait — and the travel. Our care team offers urgent visits in your home, helping you avoid unnecessary emergency room trips.</p>" +
					"<h4>End-to-End Care — at Home</h4>" +
					"<p>We offer care for your family that goes beyond your medical needs, with specialized services including for dementia, mobility challenges, and coordination with your doctors, nurses and caregivers.</p>",
				},
				{
					image: GraceImg,
						imgAlt: "",
						imgWidth: "509",
						imgHeight: "339",
				},
			],
		};
	} else if (page == "grace-at-home" && num == "second") {
		content = {
			bgGradient: true,			
			columns: [
				{
					image: Grace2Img,
						imgAlt: "",
						imgWidth: "665",
						imgHeight: "440",
				},
				{
					heading: "What Makes <br/><em>Grace at Home</em> Different?",
					headingPeriod: false,
					text: "<p>A Doctor Who Comes to You — No waiting rooms. No drives. Care that comes to your door.</p>",
				},
			],
		};
	} else if (page == "for-moms" && num == "first") {
		content = {
			bgGradient: false,			
			columns: [
				{
					image: MomsImg,
						imgAlt: "",
						imgWidth: "622",
						imgHeight: "650",
				},
				{
					heading: "Why CINQCARE for Moms?",
					headingPeriod: false,
					text: "<h4>Getting pregnancy and postpartum care can feel like wandering through a maze. Long wait times. Complicated coverage rules. Limited support for real-life challenges.</h4>" +
					"<h4>Too many women are left to figure out their getting quality care alone. At CINQCARE, we make sure <em>no mom has to navigate this journey by herself.</em></h4>",
				},
			],
		};
	} else if (page == "for-moms" && num == "second") {
		content = {
			bgGradient: true,			
			columns: [
				{
					image: Moms2Img,
						imgAlt: "",
						imgWidth: "665",
						imgHeight: "440",
				},
				{
					heading: "Your Health, <em>Your Way</em>",
					headingPeriod: false,
					text: "<p>CINQCARE for Moms is built on partnerships with trusted practitioners and community-based care. At Grace Women’s Health Center in Buffalo, women receive pregnancy, postpartum, and reproductive care with dignity and support.</p>" +
					"<p>Located at Jefferson Ave., Buffalo, NY</p>",
				},
			],
		};
	} else if (page == "for-moms" && num == "third") {
		content = {
			bgGradient: false,			
			columns: [
				{
					text: "<p class='fine-print'>Grace Women’s Health Center is an independently owned and operated medical practice that contracts with CINQ Connect for administrative and operational support. CINQCARE does not provide medical care or make clinical decisions.</p>",
				},
				{
					text: "",
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
							{column?.subheading && (
								<h3
									className={styles.subheading}
									dangerouslySetInnerHTML={{ __html: column.subheading }}
								></h3>
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
