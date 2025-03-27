import styles from "./iconBlocks.module.scss";

const IconBlocks = ({ page }) => {
	let content = "";

	if (page === "home") {
		content = {
			heading: "What We <span>Offer</span>",
			paragraph:
				"Care Medical Practices provide community-based, patient-centered care, all under one roof.",
			subtext:
				"CINQCARE supports providers with practice facilitation, care coordination, and value-based program support. All medical decisions remain with licensed healthcare providers within our network.",
			iconBlocks: [
				{
					icon: "icons/Award.svg",
					heading: "Primary Care",
					paragraph:
						"Routine checkups, preventive care, and chronic disease management",
				},
				{
					icon: "icons/Graph.svg",
					heading: "Primary Care",
					paragraph:
						"Routine checkups, preventive care, and chronic disease management",
				},
				{
					icon: "icons/Health.svg",
					heading: "Primary Care",
					paragraph:
						"Routine checkups, preventive care, and chronic disease management",
				},
				{
					icon: "icons/Twinkle.svg",
					heading: "Primary Care",
					paragraph:
						"Routine checkups, preventive care, and chronic disease management",
				},
				{
					icon: "icons/Doctor.svg",
					heading: "Primary Care",
					paragraph:
						"Routine checkups, preventive care, and chronic disease management",
				},
			],
		};
	}

	return (
		<section className={styles.section_IconBlocks}>
			<div className={styles.heading_IconBlocks}>
				<h2 dangerouslySetInnerHTML={{ __html: content.heading }} />
				<p dangerouslySetInnerHTML={{ __html: content.paragraph }} />
			</div>
			<div className={styles.container_IconBlocks}>
				{content.iconBlocks?.map((item, index) => (
					<div className={styles.iconBlock}>
						<img src={item.icon} key={index} loading="lazy" />
						<h3 dangerouslySetInnerHTML={{ __html: item.heading }} />
						<p dangerouslySetInnerHTML={{ __html: item.paragraph }} />
					</div>
				))}
			</div>
			<p
				className={styles.subtext_IconBlocks}
				dangerouslySetInnerHTML={{ __html: content.subtext }}
			/>
		</section>
	);
};

export default IconBlocks;
