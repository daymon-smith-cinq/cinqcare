import { useState } from "react";
import styles from "./testimonialSlider.module.scss";

const TestimonialSlider = ({ page }) => {
	let content = "";

	if (page === "providers") {
		content = {
			heading: "<span>Voices</span> of the CINQCARE practice network",
			paragraph: "",
			subtext: "",
			testimonials: [
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-1.png",
					quote:
						'"We are not a sick-care system, where we only want to see you when you\'re sick. We are in it for the long haul with our patients and the community."',
					name: "Parinda Khatri, PhD, Chief Clinical Officer of Cherokee Health Systems",
				},
				{
					color: "orange", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-2.png",
					quote:
						"\"With CINQCARE, we're not just improving metrics—we're improving lives. The impact on our patients and our practice has been transformational.\"",
					name: "Ms. Deborah Forbes — VP of Operations, Doral Health and Wellness",
				},
			],
		};
	} else if (page === "patients") {
		content = {
			heading: "Real People, <span>Real Care</span>",
			paragraph: "",
			subtext: "See More Stories",
			testimonials: [
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-3.png",
					quote:
						'"I used to miss my doctor\'s appointments because I had no way to get there. I worried about my health, but I felt stuck. Then, CINQCARE stepped in. Now, a nurse comes to me, checks on me, and helps me manage my diabetes. I feel healthier, and I finally have the support I needed."',
					name: "Linda M., CINQCARE Family Member in [STATE]",
				},
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-4.png",
					quote:
						"\"After my stroke, I didn't know how I was going to manage. CINQCARE's team checked on me at home, made sure I had food, and helped me recover. Now, I feel stronger every day.\"",
					name: "James W., CINQCARE Family Member in [STATE]",
				},
			],
		};
	} else if (page === "partners") {
		content = {
			heading: "",
			paragraph: "",
			subtext: "",
			testimonials: [
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-5.png",
					quote:
						'"By combining our expertise and resources, Humana and CINQCARE hope to make significant strides in improving the health and well-being of the diverse population of Medicare Advantage members we serve in New York."',
					name: "Julie Mascari, Humana Northeast Regional Medicare President",
				},
			],
		};
	} else if (page === "about") {
		content = {
			heading: "",
			paragraph: "",
			subtext: "",
			testimonials: [
				{
					color: "orange", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-tony.png",
					quote:
						'<em>The healthcare system didn’t work for my family.</em><small>“When I was 8 years old, my mother died from a preventable health-related cause. I created CINQCARE to answer the call to deliver health and care where people live. To make house calls and care for people where they live…We need care that treats members like family. That is my calling.”</small>',
					name: "CINQCARE Founder & CEO, Tony Welters",
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
			{content.heading && (
				<h2 dangerouslySetInnerHTML={{ __html: content.heading }} />
			)}

			{content.testimonials?.length > 0 && (
				<div
					className={`${styles.container_Testimonials} ${
						styles[content.testimonials[activeIndex]?.color]
					}`}
				>
					<div className={styles.slideWrapper} key={activeIndex}>
						{content.testimonials[activeIndex]?.image && (
							<div className={styles.image_Testimonials}>
								<img
									src={content.testimonials[activeIndex].image}
									alt=""
									loading="lazy"
								/>
							</div>
						)}

						<div className={styles.content_Testimonials}>
							{content.testimonials[activeIndex]?.quote && (
								<h3
									dangerouslySetInnerHTML={{
										__html: content.testimonials[activeIndex].quote,
									}}
								/>
							)}
							{content.testimonials[activeIndex]?.name && (
								<p
									dangerouslySetInnerHTML={{
										__html: content.testimonials[activeIndex].name,
									}}
								/>
							)}
						</div>
					</div>
				</div>
			)}

			{content.testimonials?.length > 1 && (
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
			{content.subtext && (
				<a className={styles.subtext_Testimonials} href="/community">
					{content.subtext}
				</a>
			)}
		</section>
	);
};

export default TestimonialSlider;
