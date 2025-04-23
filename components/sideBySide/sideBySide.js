import styles from "./sideBySide.module.scss";
import Image from "next/image";
import Button from "../button/button";

const SideBySide = ({ page, num }) => {
	let content = {
		bgShape: false,
		bgImage: false,
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

	if (page == "home") {
		content = {
			bgGradient: true,
			columns: [
				{
					image: "/images/sidebyside-home.jpg",
					imgAlt:
						"A young Black nurse sits side-by-side with an elderly white woman. The nurse has her arm around the older woman's shoulders and the older woman is leaning into the embrace. Both are laughing and comfortable together, like they have known each other for a long time. The backdrop is of a city neighborhood.",
					imgWidth: 665,
					imgHeight: 440,
				},
				{
					heading:
						"<big>A culture of care, anchored in <em>core values</em></big>",
					headingPeriod: false,
					buttonLink: "/about",
					buttonText: "Our Purpose",
				},
			],
		};
	} else if (page == "providers") {
		content = {
			bgShape: "/circle.svg",
			columns: [
				{
					image: "/images/WomanSmilingPortrait.jpg",
					imgAlt: "",
					imgWidth: 430,
					imgHeight: 448,
				},
				{
					subheading:
						"<strong>What if we made delivering care a little easier?</strong>",
					text:
						"<p>This is for providers who know their communities best. We know you're not just treating symptoms — you’re navigating a system that wasn’t built for high-needs, underserved populations.</p>" +
						"<p>Administrative burdens grow, care models shift, and reimbursements remain unpredictable. Yet, your commitment never wavers.</p>",
				},
			],
		};
	} else if (page == "patients") {
		content = {
			bgShape: "/images/scrolljacking--patients.svg",
			columns: [
				{
					image: "/images/AssistingElderly.jpg",
					imgAlt: "",
					imgWidth: 430,
					imgHeight: 448,
				},
				{
					subheading:
						"<strong>What if getting care didn’t feel so hard?</strong>",
					text:
						"<p>For too many people, healthcare feels out of reach — it can seem like no one is truly looking out for you.</p>" +
						"<p>Long wait times, complicated paperwork, and a system that wasn’t built for real life make it difficult to get the help you deserve.</p>" +
						"<p>But it doesn’t have to be this way. At CINQCARE, we bring health and care together, meeting you where you are and making it easier to get the support you need.</p>",
				},
			],
		};
	} else if (page == "partners") {
		content = {
			bgShape: "/images/scrolljacking--partners.svg",
			columns: [
				{
					image: "/images/BedsideVisit.jpg",
					imgAlt: "",
					imgWidth: 430,
					imgHeight: 448,
				},
				{
					subheading:
						"<strong>Healthcare has been failing the most vulnerable</strong>",
					text:
						"<p>High-needs individuals are too often reactively served, leading to preventable hospitalizations, rising costs, and poor outcomes. CINQCARE is changing that — shifting from fragmented care to integrated, home-first, whole-person health for every generation.</p>" +
						"<p>We partner with health plans, state governments, and mission-aligned organizations to reach high-needs individual, Healthy babies, fresh starts, and aging with grace — CINQCARE is building strong health communities</p>",
				},
			],
		};
	} else if (page == "about") {
		content = {
			bgGradient: false,
			columns: [
				{
					image: "/images/WomanSmiling-about.jpg",
					imgAlt: "",
					imgWidth: 665,
					imgHeight: 440,
				},
				{
					subheading: "<em>Care is a Calling</em>",
					heading:
						"It’s more than a job. It’s a purpose. It’s a calling. If it’s your goal to deliver care where you live, let’s work together.",
					headingPeriod: false,
					buttonLink: "/careers-with-a-calling",
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
					text:
						"<h4><strong>Common Sense Help — at Home</strong></h4>" +
						"<p>Work with a dedicated care advocate to make a plan for your unique situation alongside your family and caregivers. From building a ramp to get in your front door safely to help with healthy groceries, we are on your side.</p>" +
						"<h4><strong>Primary, Urgent and Preventive Care — at Home</strong></h4>" +
						"<p>Let’s work together to fix things before they go wrong. Get checkups that don’t rush, help with your medications, and support in managing your chronic conditions, including diabetes, heart disease, and COPD.</p>" +
						"<h4><strong>End-to-End Care — at Home</strong></h4>" +
						"<p>We offer care for your family that goes beyond your medical needs, with specialized services including for dementia, mobility challenges, time off for caregivers, and coordination with your doctors, and nurses.</p>",
				},
				{
					image: "/images/NurseHuggingWoman.jpg",
					imgAlt: "",
					imgWidth: 509,
					imgHeight: 339,
				},
			],
		};
	} else if (page == "grace-at-home" && num == "second") {
		content = {
			bgGradient: true,
			columns: [
				{
					image: "/images/NurseFrontDoor.jpg",
					imgAlt: "",
					imgWidth: 665,
					imgHeight: 440,
				},
				{
					heading: "What Makes <br/><em>Grace at Home</em> Different?",
					headingPeriod: false,
					text: "<p>Going Beyond Medical Care — Whether you need primary care, urgent visits, medications, mobility, food access, caregiver support, or help managing chronic conditions, we create a plan just for you.</p>",
				},
			],
		};
	} else if (page == "for-moms" && num == "first") {
		content = {
			bgGradient: false,
			columns: [
				{
					image: "/images/WomenPregnancyTest.jpg",
					imgAlt: "",
					imgWidth: 622,
					imgHeight: 650,
				},
				{
					heading: "Why CINQCARE for Moms?",
					headingPeriod: false,
					text:
						"<h4>Getting pregnancy and postpartum care can feel like wandering through a maze. Long wait times. Complicated coverage rules. Limited support for real-life challenges.</h4>" +
						"<h4>Too many women are left to figure out they're getting quality care alone. At CINQCARE, we make sure <em>no mom has to navigate this journey by herself.</em></h4>",
				},
			],
		};
	} else if (page == "for-moms" && num == "second") {
		content = {
			bgGradient: true,
			columns: [
				{
					image: "/images/Babymother.jpg",
					imgAlt: "",
					imgWidth: 665,
					imgHeight: 440,
				},
				{
					heading: "Your Health, <em>Your Way</em>",
					headingPeriod: false,
					text:
						"<p>CINQCARE for Moms is built on partnerships with trusted practitioners and community-based care. At Grace Women’s Health Center in Buffalo, women receive pregnancy, postpartum, and reproductive care with dignity and support.</p>" +
						"<p>Located at Jefferson Ave., Buffalo, NY</p>",
				},
			],
		};
	}

	return (
		<section
			className={`
				${styles.section_sideBySide} 
				${content.bgGradient ? styles.gradient : undefined} 
				${content.bgShape ? styles.shape : undefined}
				${page === "providers" ? styles.circle : undefined}
				${page === "patients" ? styles.loop : undefined}
				${page === "partners" ? styles.lane : undefined}
			`}
			style={{
				backgroundImage: content.bgShape
					? `
						linear-gradient(180deg, rgba(255, 230, 199, 0) 0%, rgba(255, 230, 199, 0) 70%, #FFF 100%),
						url(${content.bgShape}),
						linear-gradient(180deg, #ffe6c7 0%, #FFF 100%)
					`
					: undefined,
			}}
		>
			<div className={`${styles.container_sideBySide} wrapper`}>
				<div className={styles.columnContainer}>
					{content.columns &&
						content.columns.map((column, columnIndex) => (
							<div key={columnIndex} className={styles.column}>
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
										className={`${styles.heading} ${
											column.headingPeriod ? "period" : undefined
										}`}
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
									<Button link={column.buttonLink} text={column.buttonText} />
								)}
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default SideBySide;
