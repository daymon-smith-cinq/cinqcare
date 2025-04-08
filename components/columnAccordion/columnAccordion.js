import styles from "./columnAccordion.module.scss";

const ColumnAccordion = ({ page }) => {
	// *******
	// Content
	// *******
	let content = "";

	// Homepage
	if (page == "home") {
		content = {
			heading: "In 20+ communities <em>and growing</em>",
			headingPeriod: true,
			columns: [
				{
					title: "Care Medical Practice",
					text: "<p>Delivering high-quality primary and specialty care—with compassion.</p>",
					buttonText: "Learn More",
					buttonLink: "/care-medical-practice",
					imgSrc: "images/Nurse.jpg",
					imgAlign: "left center",
					comingSoon: false,
				},
				{
					title: "CINQCARE for Moms",
					text: "<p>Meeting women where they are and making sure they have the care, advocacy, and support they deserve.</p>",
					buttonText: "Learn More",
					buttonLink: "/for-moms",
					imgSrc: "images/MotherChild.jpg",
					imgAlign: "right center",
					comingSoon: false,
				},
				{
					title: "Grace at Home",
					text: "<p>Connecting virtual and in-home care in coordination with your local primary care team.</p>",
					buttonText: "Learn More",
					buttonLink: "https://grace-at-home.care/",
					imgSrc: "images/NursePatient.jpg",
					imgAlign: "center",
					comingSoon: false,
				},
				{
					title: "Active Aging",
					text: "<p>High-touch support to help our older family members thrive at home. </p>",
					buttonText: "",
					buttonLink: "",
					imgSrc: "images/WomanLaughing.jpg",
					imgAlign: "center",
					comingSoon: true,
				},
			],
		};
	}

	function toggleAccordion(event) {
		if (
			event.type === "click" ||
			event.type === "mouseenter" ||
			event.type === "mouseleave" ||
			event.key === "Enter" ||
			event.key === " "
		) {
			// Close all accordion items
			const allButtons = document.querySelectorAll(
				`.${styles.accordion_button}`
			);
			const allPanels = document.querySelectorAll(
				`.${styles.accordion_toggle}`
			);

			allButtons.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
			allPanels.forEach((panel) => panel.classList.remove(styles.show));

			const button = event.currentTarget;
			const expanded = button.getAttribute("aria-expanded") === "true";
			button.setAttribute("aria-expanded", !expanded);

			const panel = document.getElementById(
				button.getAttribute("aria-controls")
			);
			if (!expanded) {
				panel.classList.add(styles.show);
			} else {
				panel.classList.add(styles.show);
			}

			// Prevent default behavior for keypress events
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
			}
		}
	}

	return (
		<section className={styles.section_ColumnAccordion}>
			<div className={`${styles.container_ColumnAccordion} ${" wrapper"}`}>
				<div className={styles.columnContainer}>
					{content.columns &&
						content.columns.map((column, columnIndex) => (
							<div
								key={columnIndex}
								className={`no-select ${styles.accordion_button} ${styles.column}`}
								id={`column-accordion-button-${columnIndex}`}
								role="button"
								tabIndex="0"
								aria-controls={`column-accordion-panel-${columnIndex}`}
								aria-expanded={columnIndex === 0 ? "true" : "false"} // Set aria-expanded for the first item
								onMouseEnter={toggleAccordion}
								onMouseLeave={toggleAccordion}
								onKeyUp={toggleAccordion}
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

									<div
										id={`column-accordion-panel-${columnIndex}`}
										role="region"
										aria-labelledby={`column-accordion-button-${columnIndex}`}
										className={`${styles.accordion_toggle} ${
											columnIndex === 0 ? styles.show : ""
										}`} // Add show class for the first item
									>
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

									{column?.comingSoon && (
										<div className={styles.comingSoon}>
											<span>Coming soon</span>
										</div>
									)}
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default ColumnAccordion;
