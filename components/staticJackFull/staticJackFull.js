import styles from "./staticJackFull.module.scss";

const StaticJack = ({ page }) => {
	// *******
	// Content
	// *******
	let content = "";

	// Homepage
	if (page == "providers") {
		content = {
			background: "backgrounds/circle-path-orange.svg",
			image: "images/elderly-woman-laughing.png",
			heading: "What if I'm nonkey?",
			paragraph:
				" This is for providers who know their communities best. We know you're not just treating symptoms — you’re navigating a system that wasn’t built for high-needs, underserved populations. <br> <br> Administrative burdens grow, care models shift, and reimbursements remain unpredictable. Yet, your commitment never wavers.",
		};
	}

	return (
		<section className={styles.section_staticJack}>
			<div
				className={styles.container_Background}
				style={{
					backgroundImage: `url(${content.background})`,
					backgroundSize: "cover", // optional
					backgroundRepeat: "no-repeat", // optional
					backgroundPosition: "center", // optional
				}}
			></div>
			<div className={`${styles.container_staticJack} ${" wrapper"}`}>
				<div className={styles.image}>
					{content.image && <img src={content.image} alt="" />}
				</div>
				<div className={styles.content}>
					{content.heading && (
						<h2 dangerouslySetInnerHTML={{ __html: content.heading }} />
					)}
					{content.paragraph && (
						<p dangerouslySetInnerHTML={{ __html: content.paragraph }} />
					)}
				</div>
			</div>
		</section>
	);
};

export default StaticJack;
