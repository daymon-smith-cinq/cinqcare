import styles from "./slidecordion.module.scss";
import Image from "next/image";
import Button from "../button/button";

const Slidecordion = ({ page }) => {
	// *******
	// Content
	// *******
	let content = "";

	// Homepage
	if (page == "home") {
		content = {
			heading:
				"Working with our community leaders to <em>surround patients with the support</em> they need",
			headingPeriod: true,
			slides: [
				{
					title: "Providers",
					text: "<p>We embrace local physicians, practitioners, nurses and clinic leaders who are aligned with our work to remove barriers to health and well-being. Together, we serve our communities.</p>",
					buttonText: "See Providers",
					buttonLink: "/providers",
					imgSrc: "/images/Providers.svg",
					imgAlt:
						"A graphic of a dotted line connecting a patient to a care provider. An example alert shows the text 'General Check-in' with the date and time.",
				},
				{
					title: "Patients",
					text: "<p>We don’t have patients or customers – we have Family Members. Our culture of care starts with understanding your needs and your plans. It is the cornerstone for how we deliver care, where you live.</p>",
					buttonText: "See Patients",
					buttonLink: "/patients",
					imgSrc: "/images/Patients.png",
					imgAlt:
						"A simple illustrated map of a county with health center locations marked.",
				},
				{
					title: "Partners",
					text: "<p>We are partnered in purpose to lower costs, increase Family Member satisfaction, and deliver better outcomes in high-needs, urban and rural communities across the US.</p>",
					buttonText: "See Partners",
					buttonLink: "/partners",
					imgSrc: "/images/Partners.svg",
					imgAlt:
						"A line graph illustrating a patient's blood pressure readings over time.",
				},
			],
		};
	}

	function toggleAccordion(event) {
		if (event.type === "click" || event.key === "Enter" || event.key === " ") {
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

			// Create array of affected panels
			const affectedPanels = document.querySelectorAll(
				button
					.getAttribute("aria-controls")
					.split(" ")
					.map((id) => `#${id}`)
					.join(", ")
			);

			if (!expanded) {
				affectedPanels.forEach((panel) => panel.classList.add(styles.show));
			} else {
				affectedPanels.forEach((panel) => panel.classList.remove(styles.show));
			}

			// Prevent default behavior for keypress events
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
			}
		}
	}

	// ***
	// TODO: Add pagination under image
	// ***

	return (
		<section className={styles.section_Slidecordion}>
			<div className={`${styles.container_Slidecordion} ${" wrapper"}`}>
				<div className={styles.slidecordion}>
					<div className={styles.slidecordionTextContainer}>
						<h3
							className={content.headingPeriod ? "period" : undefined}
							dangerouslySetInnerHTML={{ __html: content.heading }}
						></h3>

						{content.slides &&
							content.slides.map((slide, slideIndex) => (
								<div key={slideIndex} className={styles.slidecordionSlide}>
									<h2
										id={`accordion-button-${slideIndex}`}
										role="button"
										tabIndex="0"
										aria-controls={`accordion-panel-${slideIndex} accordion-image-${slideIndex}`}
										aria-expanded={slideIndex === 0 ? "true" : "false"} // Set aria-expanded for the first item
										onClick={toggleAccordion}
										onKeyUp={toggleAccordion}
										className={`no-select ${styles.accordion_button}`}
										dangerouslySetInnerHTML={{ __html: slide.title }}
									></h2>
									<div
										id={`accordion-panel-${slideIndex}`}
										role="region"
										aria-labelledby={`accordion-button-${slideIndex}`}
										className={`${styles.accordion_toggle} ${
											slideIndex === 0 ? styles.show : ""
										}`} // Add show class for the first item
									>
										<div className={styles.accordion_toggle_show}>
											<div
												className={styles.slidecordionText}
												dangerouslySetInnerHTML={{ __html: slide.text }}
											></div>
											{slide?.buttonLink && (
												<Button
													link={slide.buttonLink}
													text={slide.buttonText}
													size="small"
												/>
											)}
										</div>
									</div>
								</div>
							))}
					</div>
					<div className={styles.slidecordionImgContainer}>
						{content.slides &&
							content.slides.map((slide, slideIndex) => (
								<div
									key={slideIndex}
									id={`accordion-image-${slideIndex}`}
									role="region"
									aria-labelledby={`accordion-button-${slideIndex}`}
									className={`${styles.accordion_toggle} ${
										styles.slidecordionImage
									} ${slideIndex === 0 ? styles.show : ""}`} // Add show class for the first item
								>
									<Image
										src={slide.imgSrc}
										alt={slide.imgAlt}
										width={717}
										height={779}
										data-slidecordion-page={slideIndex}
									/>
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Slidecordion;
