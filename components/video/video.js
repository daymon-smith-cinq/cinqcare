import styles from "./video.module.scss";
import MuxPlayer from "@mux/mux-player-react";

const Video = ({ page, vid }) => {
	// *******
	// Content
	// *******
	let content = "";

	// Homepage
	if (page == "home") {
		content = {
			heading:
				"Learn how Gail <em>reversed her diabetes</em> diagnosis and went from nine chronic conditions to one, thanks to the end-to-end coordinated care provided by <br>CINQCARE in her neighborhood.",
			headingPeriod: false,
			quote:
				"“Seeing that somebody cares if I’m doing well or not, that’s what I call a team. It is a push they give you to go for more… I’m going to get better. I’m going to be better. I’m going to come off of this medication. I see I can do it.”",
			name: "– CINQCARE Family Member",
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
			quote:
				"“It’s like a family circle, they don’t hesitate to do anything for you. It makes me feel comfortable.”",
			name: "— Kenneth, CINQCARE/Cherokee Health Systems patient",
			videoId: "rFHXoYNkoBiLCy5kCjrwDjVMK1ku8Dz6RQs3U9GvMWI",
			videoTitle: "CINQCARE Partnership with Cherokee Health Systems",
		};
	}

	// Communities
	if (page == "communities" && vid == "alan") {
		content = {
			heading: "A <em>Healthy Start</em> Story",
			headingPeriod: false,
			quote:
				'"A lot of the members that we have are a part of our community… It’s just nice to know that you’ve helped somebody achieve their goals and that you were a part of their journey."',
			name: "– Denee, CINQCARE care manager",
			videoId: "n1ybMAbdtTSIthhr4t3hpCtCAXlLkvh02ZKkE5024vGs00",
			videoTitle: "Healthy Start Interview",
		};
	} else if (page == "communities" && vid == "buffalo") {
		content = {
			reverseGradient: true,
			heading: "Buffalo grand <em>opening</em>",
			headingPeriod: false,
			quote:
				'"On behalf of the entire city of Buffalo, I want to thank CINQCARE for the work that they are doing, for their leadership and their continued commitment to the Buffalo community."',
			name: "– Christopher P. Scanlon, Mayor of Buffalo, NY",
			videoId: "54X00oJg1oqRctBCEmVRvVJuKlyoDGxGmo6NXVIhqPU00",
			videoTitle: "GWHC Grand Opening",
		};
	}

	return (
		<section
			className={`${styles.section_video} ${
				content.reverseGradient ? `${styles.reverseGradient}` : undefined
			}`}
		>
			<div className={`${styles.container_video} ${"wrapper"}`}>
				<h2
					className={content.headingPeriod ? "period" : undefined}
					dangerouslySetInnerHTML={{ __html: content.heading }}
				></h2>
				<div
					className={`${styles.video} ${content.quote ? styles.hasQuote : ""}`}
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
