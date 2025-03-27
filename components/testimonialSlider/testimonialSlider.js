import { useState } from "react";
import styles from "./testimonialSlider.module.scss";

const TestimonialSlider = ({ page }) => {
	let content = "";

	if (page === "home") {
		content = {
			heading: "What We <span>Offer</span>",
			paragraph:
				"Care Medical Practices provide community-based, patient-centered care, all under one roof.",
			subtext:
				"CINQCARE supports providers with practice facilitation, care coordination, and value-based program support. All medical decisions remain with licensed healthcare providers within our network.",
			testimonials: [
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot.png",
					quote:
						'"We are not a sick-care system, where we only want to see you when you\'re sick. <span>We are in it for the long haul</span> with our patients and the community."',
					name: "Parinda Khatri, PhD, CEO of Cherokee Health Systems",
				},
				{
					color: "orange",
					image: "/headshots/headshot.png",
					quote:
						'"We are not a sick-care system, where we only want to see you when you\'re sick. <span>We are in it for the long haul</span> with our patients and the community."',
					name: "test",
				},
			],
		};
	}

	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = () =>
		setActiveIndex((prev) =>
			prev === 0 ? content.testimonials.length - 1 : prev - 1
		);
	const handleNext = () =>
		setActiveIndex((prev) =>
			prev === content.testimonials.length - 1 ? 0 : prev + 1
		);

	return (
		<section className={styles.section_Testimonials}>
			<h2 dangerouslySetInnerHTML={{ __html: content.heading }} />
			<div
				className={`${styles.container_Testimonials} ${
					styles[content.testimonials[activeIndex].color]
				}`}
			>
				<div className={styles.slideWrapper} key={activeIndex}>
					<div className={styles.image_Testimonials}>
						<img src={content.testimonials[activeIndex].image} />
					</div>
					<div className={styles.content_Testimonials}>
						<h3
							dangerouslySetInnerHTML={{
								__html: content.testimonials[activeIndex].quote,
							}}
						/>
						<p
							dangerouslySetInnerHTML={{
								__html: content.testimonials[activeIndex].name,
							}}
						/>
					</div>
				</div>
			</div>

			{content.testimonials.length > 1 && (
				<div className={styles.container_Navigation}>
					<button onClick={handlePrev}></button>
					{content.testimonials.map((_, i) => (
						<span
							key={i}
							className={`${styles.dot} ${
								i === activeIndex ? styles.activeDot : ""
							}`}
							onClick={() => setActiveIndex(i)}
						></span>
					))}
					<button onClick={handleNext}></button>
				</div>
			)}
		</section>
	);
};

export default TestimonialSlider;
