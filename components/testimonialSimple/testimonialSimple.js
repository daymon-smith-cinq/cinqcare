import styles from "./testimonialSimple.module.scss";

const TestimonialSimple = ({ page }) => {
	// *******
	// Content
	// *******

	// Alllll the options
	let content = {
		bgGradient: true,
		heading: "",
		quote:
			'',
		name: "",
	};

	// About
	if (page == "about") {
		content = {
			bgGradient: true,
			heading: "The healthcare system didn't work for my family",
			quote:
				'"When I was 8 years old, my mother died from a preventable health-related cause. I created CINQCARE to answer the call to deliver health and care where people live. To make house calls and care for people where they live...we need care that treats members like family. That is my calling."',
			name: "-CINQCARE Founder & CEO, Tony Welters",
		};
	}

	return (
		<section
			className={`${styles.section_testimonialSimple} ${
				content.bgGradient ? styles.gradient : undefined
			}`}
		>
			<div className={`${styles.container_testimonialSimple} ${" wrapper"}`}>
				<div className={styles.testimonialContainer}>
					{content.heading && (
						<h3 
							className={styles.heading} 
							dangerouslySetInnerHTML={{ __html: content.heading }} 
						/>
					)}
					{content.quote && (
						<h2 
							className={styles.quote} 
							dangerouslySetInnerHTML={{ __html: content.quote }} 
						/>
					)}
					{content.name && (
						<p 
							className={styles.name} 
							dangerouslySetInnerHTML={{ __html: content.name }} 
						/>
					)}
				</div>
			</div>
		</section>
	);
};

export default TestimonialSimple;
