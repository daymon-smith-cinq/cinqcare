import styles from "./columnAccordionRevised.module.scss";

const ColumnAccordionRevised = ({ page }) => {
	// *******
	// Content
	// *******
	let content = "";

	// Homepage
	if (page == "home") {
		content = {
			heading: "How We Deliver Health and Care",
			paragraph:
				"<p>At CINQCARE, we deliver trusted, culturally-informed care across multiple settings - where you live, how you live, and as your needs change.</p>" +
				"<p>Explore our models of care and signature programs:</p>",
			headingPeriod: false,
			columns: [
				{
					title: "Grace at Home",
					text: "<p>In-home, virtual, and community-based services - including Active Aging support for older adults and dementia care.</p>",
					buttonText: "Learn More",
					buttonLink: "/grace-at-home",
					imgSrc: "images/NursePatient.jpg",
					imgAlign: "center",
				},
				{
					title: "Care Medical Practice",
					text: "<p>In-person clinical care at trusted local practices.</p>",
					buttonText: "Learn More",
					buttonLink: "/care-medical-practice",
					imgSrc: "images/Nurse.jpg",
					imgAlign: "left center",
				},
				{
					title: "CINQCARE for Moms",
					text: "<p>Personalized care and wellness for moms and families - from pregnancy through postpartum.</p>",
					buttonText: "Learn More",
					buttonLink: "/moms",
					imgSrc: "images/MotherChild.jpg",
					imgAlign: "right 35%",
				},
			],
		};
	}

	return (
		<section className={styles.section_ColumnAccordion}>
			<div className={`${styles.container_ColumnAccordion} ${" wrapper"}`}>
				{content.heading && (
					<h2 dangerouslySetInnerHTML={{ __html: content.heading }}></h2>
				)}
				{content.paragraph && (
					<div dangerouslySetInnerHTML={{ __html: content.paragraph }}></div>
				)}
				<div className={styles.columnContainer}>
					{content.columns &&
						content.columns.map((column, columnIndex) => (
							<div
								key={columnIndex}
								className={`no-select ${styles.accordion_button} ${styles.column}`}
								style={{
									backgroundImage: `url(${column.imgSrc})`,
									backgroundPosition: `${column.imgAlign}`,
								}}
							>
								<div className={styles.textBox}>
									<h4
										className={styles.columnTitle}
										dangerouslySetInnerHTML={{ __html: column.title }}
									></h4>

									<div className={styles.accordion_toggle}>
										<div
											className={styles.columnText}
											dangerouslySetInnerHTML={{ __html: column.text }}
										></div>
										{column?.buttonLink && (
											<a className={styles.columnLink} href={column.buttonLink}>
												{column.buttonText}
											</a>
										)}
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default ColumnAccordionRevised;
