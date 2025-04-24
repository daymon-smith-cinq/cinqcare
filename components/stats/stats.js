import styles from "./stats.module.scss";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
			stats: [
				{
					img: "images/stat-1.svg",
					alt: "A graph of many dots, 50% of which are orange. The text reads: '1 in 2 Americans lives with chronic disease today - we need a change.'",
				},
				{
					img: "images/stat-2.svg",
					alt: "A graph depicting an upward trend. The text reads: '80% of your health is tied to factors outside of a hospital or clinic.'",
				},
				{
					img: "images/stat-3.svg",
					alt: "A graph depicitng many orange dots. The text reads: 'Reducing repeat trips to the hospital for members by 52%.'",
				},
			],
		};
	}

	// Initialize animations
	useEffect(() => {
		AOS.init();
	}, [])

	return (
		<section className={styles.section_stats}>
			<div className={`${styles.container_stats} ${" wrapper"}`}>
				<h3 
					className={content.headingPeriod ? ("period") : undefined}
					dangerouslySetInnerHTML={{ __html: content.heading }}
				></h3>
				<div className={styles.stats} >
					{content.stats &&
						content.stats.map((stat, statIndex) => (
						<img 
							key={statIndex}
							src={stat.img} 
							alt={stat.alt} 
							width={385} 
							height={311} 
							loading="lazy"
							data-aos="fade-up"
							data-aos-duration="500"
							data-aos-delay={statIndex * 100}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;
