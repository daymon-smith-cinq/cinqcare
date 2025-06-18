import Image from "next/image";
import BannerLogo from "../../public/Bannerlogo.png";
import styles from "./banner.module.scss";

const Banner = () => {
	return (
		<div className={styles.topBanner}>
			<div className={`wrapper ${styles.customBannerContainer}`}>
				<div className={styles.bannerFlexWrap}>
					<div className={styles.logoContainer}>
						<Image
							priority
							src={BannerLogo}
							alt="Cinqcare Logo"
							width={180}
							height={50}
						/>
					</div>
					<div className={styles.textContainer}>
						<strong>Care at Home is now Grace at Home</strong>
						<p>
							We’ve changed our name and look, but not our commitment. As part of CINQCARE, Grace at Home continues to provide care that’s human, simple, and centered on you—delivering the support you need, right where you live.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
