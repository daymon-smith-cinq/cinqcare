import styles from "./orangeBox.module.scss";
import Image from "next/image";
import ImgHome from "/public/images/orangeBox-temp.jpg";

const OrangeBox = ({ page }) => {

	// *******
	// Content
	// *******
	let content = "";

	// Homepage
	if (page == "home") {
		content = {
			bgImgSrc: "images/orangeBox-stripes-home.png",
			foregroundImg: "<Image priority={false} src='images/orangeBox-temp.jpg' alt='' />", // optional
			text: "<h4>Our vision</h4>" +
				"<h3>People who need care, particularly at home, often never get it — <em>especially when they live in high-needs, urban and rural areas.</em> In our communities, we know it’s too hard to get in to see a primary care doctor, too expensive to get a nurse to visit at home, too complicated to qualify for support programs.</h3>" +
				"<h3>That’s why we design new models to deliver health and care – better, easier and less expensively – to our communities, right where you live.</h3>" +
				"<h3><em>We are in the health and care business.</em></h3>"
		};
	}

	// Render foreground image
	const RenderForegroundImg = () => (
		<Image priority={false} src={ImgHome} alt='' />
	);

	return (
		<section className={styles.section_orangeBox}>
			<div className={`${styles.container_orangeBox} ${" wrapper"}`}>
				<div 
					className={styles.orangeBox}
					style={{
						backgroundImage: `url(${content.bgImgSrc})`,
					}}
				>
					<div className={styles.orangeBoxImage}>
						<RenderForegroundImg />
					</div>
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
