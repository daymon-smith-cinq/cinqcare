import styles from "./hero.module.scss";

const Hero = () => {
	return (
		<section className={styles.section_Hero}>
			<div className={`${styles.container_Hero} ${" container"}`}>
				<h1>Strengthening Community-Based Care, Together</h1>
				<a
					className="btn btn-blue"
					href="#"
				>Learn more about joining CINQCARE</a>
				
			</div>
		</section>
	);
};

export default Hero;
