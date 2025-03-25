import styles from "./stats.module.scss";
import Image from "next/image";
import Stat1 from "/public/images/stat-1.svg";
import Stat2 from "/public/images/stat-2.svg";
import Stat3 from "/public/images/stat-3.svg";

const Stats = ({ page }) => {

	// *******
	// Content
	// *******
	let content = "";

	// Homepage
	if (page == "home") {
		content = {
			heading: "Health and care that treats you <em>like family</em> where you live",
			headingPeriod: true,
			stat1alt: "A graph of many dots, 50% of which are orange. The text reads: '1 in 2 Americans lives with chronic disease today - we need a change.'",
			stat2alt: "A graph depicting an upward trend. The text reads: '80% of your health is tied to factors outside of a hospital or clinic.",
			stat3alt: "A graph depicitng many orange dots. The text reads: 'Reducing repeat trips to the hospital for members by 52%.'",
		};
	}

	return (
		<section className={styles.section_stats}>
			<div className={`${styles.container_stats} ${" wrapper"}`}>
				<h3 
					className={content.headingPeriod ? ("period") : undefined}
					dangerouslySetInnerHTML={{ __html: content.heading }}
				></h3>
				<div className={styles.stats} >
					<Image priority={false} src={Stat1} alt={content.stat1alt} width={385} height={311} />
					<Image priority={false} src={Stat2} alt={content.stat2alt} width={385} height={311} />
					<Image priority={false} src={Stat3} alt={content.stat3alt} width={385} height={311} />
				</div>
			</div>
		</section>
	);
};

export default Stats;
