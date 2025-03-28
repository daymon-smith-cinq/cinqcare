import styles from "./video.module.scss";
import MuxPlayer from "@mux/mux-player-react";

const Video = ({ page }) => {
	// *******
	// Content
	// *******
	let content = "";

	// Homepage
	if (page == "home") {
		content = {
			heading:
				"Learn how Gail <em>reversed her diabetes diagnosis</em> and went from nine chronic conditions to one thanks to the coordinated care provided by CINQCARE in her neighborhood:",
			headingPeriod: false,
			quote: "",
			name: "",
			videoId: "ylArPH37N4UqBAbiigSnVKqrV4Aw3xa4tiXz523TBjA",
			videoTitle: "Gail's CINQCARE Health Home Story",
		};
	}

	// Providers
	if (page == "providers") {
		content = {
			heading:
				"Meet Cherokee Health Systems, an FQHC <em>thriving</em> in CINQCARE’s network",
			headingPeriod: true,
			quote: "",
			name: "",
			videoId: "rFHXoYNkoBiLCy5kCjrwDjVMK1ku8Dz6RQs3U9GvMWI",
			videoTitle: "CINQCARE Partnership with Cherokee Health Systems",
		};
	}

	return (
		<section className={styles.section_video}>
			<div className={`${styles.container_video} ${"wrapper"}`}>
				<h2
					className={content.headingPeriod ? "period" : undefined}
					dangerouslySetInnerHTML={{ __html: content.heading }}
				></h2>
				<div
					className={`${styles.video} ${
						content.hasQuote ? styles.hasQuote : ""
					}`}
				>
					<MuxPlayer
						playbackId={content.videoId}
						metadataVideoTitle={content.videoTitle}
						primary-color="#ffffff"
						secondary-color="#020e0a"
						accent-color="#DA6B07"
					/>
				</div>
				{content.quote && (
					<div className={styles.container_Quote}>
						{content.quote && (
							<h3 dangerouslySetInnerHTML={{ __html: content.quote }} />
						)}
						{content.name && (
							<p dangerouslySetInnerHTML={{ __html: content.name }} />
						)}
					</div>
				)}
			</div>
		</section>
	);
};

export default Video;
