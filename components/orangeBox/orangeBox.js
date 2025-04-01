import styles from "./orangeBox.module.scss";
import Image from "next/image";
import ImgHome from "/public/images/orangeBox.jpg";
import ImgCommunity from "/public/images/WomenConversation.jpg";

const OrangeBox = ({ page }) => {

	// *******
	// Content
	// *******
	let content = {
		bgImgSrc: "images/orangeBox-stripes-home.png",
		foregroundImg: "",
		foregroundImgAlt: "",
		text: "",
	}

	// Homepage
	if (page == "home") {
		content = {
			bgImgSrc: "images/orangeBox-stripes-home.png",
			foregroundImg: ImgHome,
			foregroundImgAlt: "",
			text: "<h4>Our vision</h4>" +
				"<h3>People who need care, particularly at home, often never get it — <em>especially when they live in high-needs, urban and rural areas.</em> In our communities, we know it’s too hard to get in to see a primary care doctor, too expensive to get a nurse to visit at home, too complicated to qualify for support programs.</h3>" +
				"<h3>That’s why we design new models to deliver health and care – better, easier and less expensively – to our communities, right where you live.</h3>" +
				"<h3><em>We are in the health and care business.</em></h3>"
		};
	} else if (page == "grace-at-home") {
		content = {
			bgImgSrc: "images/orangeBox-stripes-care.png",
			text: "<h4>For too many people, getting care means long waits, stressful travel, and a system that feels out of touch with daily life. Our healthcare system can be hard to navigate and even harder to access.</h4>" +
			"<h4>We <em>meet you where you are,</em> delivering expert medical care, right in the comfort of your home — so you can focus on living well.</h4>",
		};
	} else if (page == "for-moms") {
		content = {
			bgImgSrc: "images/orangeBox-stripes-moms.png",
			text: "<h3>“I felt like I was doing this alone—until I found CINQCARE.”</h3>" +
			"<h3>Tasha W. - CINQCARE Mom</h3>",
		};
	} else if (page == "communities") {
		content = {
			bgImgSrc: "images/orangeBox-stripes-home.png",
			foregroundImg: ImgCommunity,
			foregroundImgAlt: "",
			text: "<h3>As we find new ways to drive care forward and the health of our nation forward — the things that matter most to us are always the individual stories of Family Members and communities healing together.</h3>",
		};
	}

	return (
		<section className={styles.section_orangeBox}>
			<div className={`${styles.container_orangeBox} ${" wrapper"}`}>
				<div 
					className={styles.orangeBox}
					style={{
						backgroundImage: `url(${content.bgImgSrc})`,
					}}
				>
					{content?.foregroundImg && (
						<div className={styles.orangeBoxImage}>
							<Image priority={false} src={content.foregroundImg} alt={content.foregroundImgSrc} />
						</div>
					)}
					<div
						className={styles.orangeBoxContent} 
						dangerouslySetInnerHTML={{ __html: content.text }}
					></div>
				</div>
			</div>
		</section>
	);
};

export default OrangeBox;
