import styles from "./columnAccordionRevised.module.scss";

const ColumnAccordionRevised = ({ page }) => {
	// *******
	// Content
	// *******
	let content = "";

	// Homepage
	if (page == "home") {
		content = {
			heading: "How we deliver Health and Care",
			paragraph:
				"At CINQCARE, we deliver trusted, culturally-informed care across multiple settings - where you live, how you live, and as your needs change.",
			headingPeriod: false,
			columns: [
				{
					title: "Grace at Home",
					text: "<p>Connecting virtual and in-home care in coordination with your local primary care team.</p>",
					buttonText: "Learn More",
					buttonLink: "https://grace-at-home.care/",
					imgSrc: "images/NursePatient.jpg",
					imgAlign: "center",
				},
				{
					title: "Care Medical Practice",
					text: "<p>Delivering high-quality primary and specialty care—with compassion.</p>",
					buttonText: "Learn More",
					buttonLink: "/care-medical-practice",
					imgSrc: "images/Nurse.jpg",
					imgAlign: "left center",
				},
				{
					title: "CINQCARE for Moms",
					text: "<p>Meeting women where they are and making sure they have the care, advocacy, and support they deserve.</p>",
					buttonText: "Learn More",
					buttonLink: "/for-moms",
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
					<p dangerouslySetInnerHTML={{ __html: content.paragraph }}></p>
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
