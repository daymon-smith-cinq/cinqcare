import styles from "./masonry.module.scss";
import buffaloMap from "../../public/masonry--map-buffalo.svg";
import brooklynMap from "../../public/masonry--map-brooklyn.svg";
import Button from "../button/button";

const MasonryCommunities = () => {
	return (
		<section className={styles.home__masonry}>
			<div className={`${styles.masonry__header} ${" wrapper"}`}>
				<header>
					<h2>
						<em>Millions of people</em> live with chronic and preventable health
						conditions.
					</h2>
				</header>
				<div className={styles.container_ParaButton}>
					<p>
						We are working together with our communities to change that.
						<br />
						It's our calling to deliver care where you live.{" "}
					</p>
					<Button link="/about" text="About Us" />
				</div>
			</div>
			<div className="wrapper">
				<div className={styles.masonry}>
					<div className={styles.masonry__column}>
						<div
							className={styles.masonry__item}
							style={{ "--item-bg": "url(https://loremflickr.com/500/473)" }}
						>
							<div className={styles.item__content}>
								<div className={styles.item__info}>
									<div className={styles.item__data}>
										<p className={styles.name}>
											<strong>Diana</strong>
											<br />
											Family Member of CINQCARE Health Home
										</p>
									</div>
									<img src={buffaloMap.src} alt="" />
								</div>
								<p>
									"Being with the right navigator at the right time is like
									godsend. She went above and beyond to assist me."
								</p>
							</div>
							<img src="/images/WomanSun.jpg" alt="" />
						</div>

						<div className={styles.masonry__item}>
							<div className={styles.item__content}>
								<div className={styles.item__info}>
									<div className={styles.item__data}>
										<p className={styles.name}>
											<strong>Alicia</strong>
											<br />
											CINQCARE care coordinater
										</p>
									</div>
									<img src={buffaloMap.src} alt="" />
								</div>
								<p>
									"[The family] was so open, so willing, and really preferred
									the in-home specialist visit vs going anywhere else and trying
									to wait and get transportation. That was really rewarding."
								</p>
							</div>
							<img src="/images/WomanPort.jpg" alt="" />
						</div>
					</div>

					<div className={styles.masonry__column}>
						<div className={styles.masonry__item}>
							<div className={styles.item__content}>
								<div className={styles.item__info}>
									<div className={styles.item__data}>
										<p className={styles.name}>
											<strong>Hina</strong>
											<br />
											Family Member of Healthy Start for Buffalo
										</p>
									</div>
									<img src={buffaloMap.src} alt="" />
								</div>
								<p>
									“They have very good programs. My workers, like Alicia, Uling
									and Sonia and nurse Kim, they come to my home, visit me…They
									are not like workers, they are like family members for me.”
								</p>
							</div>
							<img src="/images/Wheelchair.jpg" alt="" />
						</div>
					</div>

					<div className={styles.masonry__column}>
						<div className={styles.masonry__item}>
							<div className={styles.item__content}>
								<div className={styles.item__info}>
									<div className={styles.item__data}>
										<p className={styles.name}>
											<strong>Dr. Denise Christian</strong>
											<br />
											CINQCARE Cheif Medical Officer
										</p>
									</div>
									<img src={buffaloMap.src} alt="" />
								</div>
								<p>
									"We wanted to make this a place that brings safety, brings
									love, brings art and beauty, compassion and dignity."
								</p>
							</div>
							<img src="/images/Hiking.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MasonryCommunities;
