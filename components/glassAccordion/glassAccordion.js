import { useState, useRef, useEffect } from "react";
import styles from "./glassAccordion.module.scss";

const GlassAccordion = ({ page }) => {
	let content = "";

	if (page === "home") {
		content = {
			bgImgSrc: "images/Woman-helping-man-into-car.png",
			heading:
				"How can CINQCARE help deliver <span>health and care</span> where you live?",
			accordionContent: [
				{
					heading: "Care coordination",
					paragraph:
						"We work alongside your practice, integrating our clinical team and practice facilitators to ensure smooth transitions, proactive patient engagement, and high-quality outcomes.",
				},
				{
					heading: "Advanced risk stratification and population health",
					paragraph:
						"Our data-driven approach helps identify high-risk patients, reduce avoidable hospitalizations, and improve STAR & HEDIS metrics.",
				},
				{
					heading: "Home and alternative site-based care",
					paragraph:
						"We extend your practice's reach through in-home clinical teams (NPs, RNs, therapists) and hospital-at-home, urgent care, and SNF partnerships.",
				},
				{
					heading: "Enhanced patient engagement and retention",
					paragraph:
						"We provide 24/7 support, behavioral health integration, and social services to help your patients stay engaged and improve adherence.",
				},
				{
					heading: "Aligned payment and performance models",
					paragraph:
						"Whether you're in a traditional fee-for-service structure, IPA, or ACO REACH, we help maximize your practice's revenue by leveraging value-based care incentives.",
				},
			],
		};
	}

	const [activeIndex, setActiveIndex] = useState(0);

	const toggleAccordion = (index) => {
		setActiveIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section
			className={styles.section_Accordion}
			style={{ backgroundImage: `url(${content.bgImgSrc})` }}
		>
			<div className={styles.container_Heading}>
				<h2
					className={styles.heading_Accordion}
					dangerouslySetInnerHTML={{ __html: content.heading }}
				/>
			</div>

			<div className={styles.container_Accordion}>
				{content.accordionContent?.map((item, index) => {
					const isOpen = activeIndex === index;
					const contentRef = useRef(null);

					const handleKeyDown = (e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							toggleAccordion(index);
						}
					};

					useEffect(() => {
						const el = contentRef.current;
						if (el) {
							if (isOpen) {
								el.style.height = el.scrollHeight + "px";
							} else {
								el.style.height = "0px";
							}
						}
					}, [isOpen]);

					return (
						<div
							key={index}
							className={`${styles.accordion} ${isOpen ? styles.open : ""}`}
							onClick={() => toggleAccordion(index)}
							onKeyDown={handleKeyDown}
							role="button"
							tabIndex="0"
							aria-expanded={isOpen}
							aria-controls={`accordion-panel-${index}`}
							id={`accordion-button-${index}`}
						>
							<h3>{item.heading}</h3>

							<div
								id={`accordion-panel-${index}`}
								ref={contentRef}
								className={styles.accordion_Content}
								role="region"
								aria-labelledby={`accordion-button-${index}`}
								style={{
									overflow: "hidden",
									height: isOpen ? "auto" : "0px",
									transition: "height 0.2s linear",
								}}
							>
								<p>{item.paragraph}</p>
							</div>

							<div className={styles.plusMinus}></div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default GlassAccordion;
