import styles from "./map.module.scss";
import Image from "next/image";
import Button from "../button/button";
import ProvidersMap from "/public/images/map-providers.png";
import PatientsMap from "/public/images/map-patients.png";
import CareMap from "/public/images/map-grace-at-home.png";

const SideBySide = ({ page }) => {
	// *******
	// Content
	// *******
	let content = "";

	// Providers
	if (page == "providers") {
		content = {
			heading: "Working in <em>20+ communities</em> today",
			headingPeriod: true,
			text: "<p>We’re currently expanding the network with independent and community-based primary care practices, provider-led entities, IPAs, FQHCs, rural health clinics, post-acute and home-based organizations, and specialty groups in high-need areas.</p>",
			buttonText: "Learn More",
			buttonLink: "/join-our-family",
			finePrint: "",
			image: ProvidersMap,
			imgAlt:
				"A stylized map of the United States, made from a grid of many dots. Some dots are highlighted in different colors, highlighting CINQCARE-partnered locations across the US. Two locations in the Northeast have info boxes: Buffalo and DC.",
			imgWidth: "977",
			imgHeight: "675",
		};
	}

	// Patients
	if (page == "patients") {
		content = {
			heading: "<em>Serving 20+ communities</em> and growing",
			headingPeriod: true,
			text: "<p>We’re focusing on <em>where care is needed most</em> — bringing <em>health and care</em> to high-need, urban, and rural neighborhoods. We help local doctors, care teams, nurses, therapists, specialists, and community programs (including food and rides) work together for you.</p>",
			buttonText: "Learn More",
			buttonLink: "/communities",
			finePrint: "",
			image: PatientsMap,
			imgAlt:
				"A stylized map of the United States, made from a grid of many dots. Some dots are highlighted in different colors, highlighting patients who are part of the CINQCARE community. Two patients have info boxes with their photo, name, age, and location.",
			imgWidth: "955",
			imgHeight: "574",
		};
	}

	// Grace at Home
	if (page == "grace-at-home") {
		content = {
			heading: "Find <em>Grace at Home</em> Near You",
			headingPeriod: true,
			text:
				"<p>Indiana | New York | California</p>" +
				"<p>More locations are coming soon! Need help finding care?</p>",
			buttonText: "Contact Us",
			buttonLink: "/join-our-family",
			finePrint:
				"<p>Grace at Home is a medical practice delivering in-home and virtual care. CINQCARE serves as the Management Services Organization (MSO), providing operational, administrative, and non-clinical support. CINQCARE does not practice medicine or direct patient care.</p>",
			image: CareMap,
			imgAlt:
				"A stylized map of the United States, made from a grid of many dots. Some dots have pinpoints with the CINQCARE logomark, highlighting the CINQCARE community locations across the United States.",
			imgWidth: "955",
			imgHeight: "574",
		};
	}

	return (
		<section className={styles.section_map}>
			<div className={`${styles.container_map} ${" wrapper"}`}>
				<div className={styles.mapContainer}>
					<div className={styles.textContainer}>
						{content?.heading && (
							<h3
								className={`${styles.heading} ${
									content.headingPeriod ? "period" : undefined
								}`}
								dangerouslySetInnerHTML={{ __html: content.heading }}
							></h3>
						)}
						{content?.text && (
							<div
								className={styles.text}
								dangerouslySetInnerHTML={{ __html: content.text }}
							></div>
						)}
						{content?.buttonLink && (
							<Button link={content.buttonLink} text={content.buttonText} />
						)}
						{content?.finePrint && (
							<div
								className={`${styles.finePrint} ${"fine-print"}`}
								dangerouslySetInnerHTML={{ __html: content.finePrint }}
							></div>
						)}
					</div>
					{content?.image && (
						<div className={styles.map}>
							<Image
								className={styles.map}
								priority={false}
								src={content.image}
								alt={content.imgAlt}
								width={content.imgWidth}
								height={content.imgHeight}
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default SideBySide;
