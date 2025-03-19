import styles from "./hero.module.scss";

const Hero = () => {
	return (
		<section className={styles.section_Hero}>
			<div className={`${styles.container_Hero} ${" container"}`}>
				<div>
					<h1><em>Strengthening</em> Community-Based Care, Together</h1>
					<a
						className="btn btn-blue"
						href="#"
					>Learn more about joining CINQCARE</a>
 				</div>
				<div>
					<blockquote>
						“CINQCARE isn’t just another network. They truly walk alongside providers, giving us the support we need to succeed in value-based care while keeping patient relationships at the center.”
						<span>- Dr. Wilfred Herard, MD — CEO of Proactive Care IPA</span>
					</blockquote>
				</div>
			</div>
		</section>
	);
};

export default Hero;
