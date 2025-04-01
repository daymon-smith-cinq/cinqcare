import { useState, useRef, useEffect } from "react";
import styles from "./glassAccordion.module.scss";
import Button from "../button/button";

const GlassAccordion = ({ page }) => {
	let content = "";

	if (page === "providers") {
		content = {
			bgImgSrc: "images/Woman-helping-man-into-car.jpg",
			heading:
				"How can CINQCARE help deliver <span>health and care</span> where you live?",
			paragraph: "",
			buttonLink: "",
			buttonText: "",
			accordionContent: [
				{
					heading: "Care coordination",
					paragraph:
						"We work alongside your practice, integrating our clinical team and practice facilitators to ensure smooth transitions, proactive Family Member engagement, and high-quality outcomes.",
				},
				{
					heading: "Advanced risk stratification and population health",
					paragraph:
						"Our data-driven approach helps identify high-risk patients, reduce avoidable hospitalizations, and improve STAR & HEDIS metrics.",
				},
				{
					heading: "Home and alternative site-based care",
					paragraph:
						"We extend your practice’s reach through in-home clinical teams (NPs, RNs, therapists) and hospital-at-home, urgent care, and skilled nursing facility partnerships.",
				},
				{
					heading: "Enhanced patient engagement and retention",
					paragraph:
						"We provide 24/7 support, behavioral health integration, and social services to help your patients stay engaged and improve adherence.",
				},
				{
					heading: "Aligned payment and performance models",
					paragraph:
						"Whether you’re in a traditional fee-for-service structure, IPA, or ACO REACH, we help tie value-based care incentives to measurable improvements in quality, outcomes, and the health of your Family Members.",
				},
			],
		};
	} else if (page === "patients") {
		content = {
			bgImgSrc: "images/PregnantMother.jpg",
			heading: "Who <span>we're</span> helping today",
			paragraph:
				"<p>Our goal is simple: to help you stay healthier at home — with care that meets you where you are and makes a difference in your life. If you're doing your best to manage tough health issues, <span>we want to be on your side</span>.</p>",
			buttonLink: "",
			buttonText: "",
			accordionContent: [
				{
					heading: "Lenay Gilliam's Story",
					paragraph:
						"An expecting mom in Buffalo gets home health visits, ongoing care from a doula, specialist advice, delivered diapers, groceries, and medications, and follow-ups through her baby's first 18 months for free, regardless of income, and with no insurance required.",
				},
				{
					heading: "Alan Lee Jr's Story",
					paragraph:
						"A young entrepreneur navigates through alcohol abuse recovery to better health, thanks to support from his care team. Over the course of his care, he stays sober, starts riding a bike, and ultimately opens a barbershop in his own city neighborhood.",
				},
				{
					heading: "Ken Kurtz's Story",
					paragraph:
						"After suffering a spinal cord injury, an older member of a rural community is helped to navigate a hospital stay, recover at home, improve his chronic conditions, and heal enough to get out of his wheelchair, thanks to a dedicated nurse, navigator, and physician care team.",
				},
			],
		};
	} else if (page === "partners") {
		content = {
			bgImgSrc: "images/Couple-Reviewing-Information.jpg",
			heading: "How CINQCARE <span>works differently</span>",
			paragraph:
				"<p>What makes us different? We bring deep expertise, cutting-edge tools, and a commitment to care that extends beyond the clinic.</p>",
			buttonLink: "",
			buttonText: "",
			accordionContent: [
				{
					heading: "Specialized expertise",
					paragraph:
						"Our approach is informed by decades of sector leadership and lived experience in high-need, urban, and rural communities.",
				},
				{
					heading: "Precision Engagement Engine",
					paragraph:
						"AI-driven, predictive, and automated, our workflows help make sure we reach the right members, with the right interventions, at the right time.",
				},
				{
					heading: "Caring for the caregivers",
					paragraph:
						"We support family caregivers as the backbone of whole-person care, including through a hub for coordination with care teams.",
				},
			],
		};
	} else if (page === "about") {
		content = {
			bgImgSrc: "images/WomanMeeting.jpg",
			heading: "We were born <em>different</em>",
			paragraph:
				"<p>We were created in 2020 to be on call to deliver health, care and well-being in the homes and communities of those who need care the most.</p>" +
				"<p>We are passionate about creating a world where health and care isn’t a burden. It is why we are committed to recruit, empower and equip physicians, nurses, practitioners and caregivers with the supportive technology they need to every day deliver care where people live.</p>" +
				"<p>We believe providing care is a privilege – one we are grateful to earn. That’s why we built a different way to care. Now more than ever, different is better.</p>",
			buttonLink: "",
			buttonText: "",
			accordionContent: [
				{
					heading: "For Providers",
					paragraph:
						"Through a culture of care, state-of-art tools and technology, and administrative services.",
				},
				{
					heading: "For Patients",
					paragraph:
						"Through quality care, personal engagement, and support services.",
				},
				{
					heading: "For Partners",
					paragraph:
						"Through lower costs, increased Family Member satisfaction, and innovative care approaches.",
				},
			],
		};
	} else if (page === "for-moms") {
		content = {
			bgImgSrc: "images/Ultrasound.jpg",
			heading: "Care for Every Stage of <em>Motherhood</em>",
			paragraph:
				"CINQCARE for Moms provides wraparound care, designed for you.",
			buttonLink: "/join-our-family",
			buttonText: "See How CINQCARE Supports Moms",
			accordionContent: [
				{
					heading: "A Dedicated Team by Your Side",
					paragraph:
						"Nurse practitioners, doulas, social workers, and community health workers partner with you to help every step of the way.",
				},
				{
					heading: "Care Where You Need It",
					paragraph:
						"Virtual visits, home check-ins, and in-person appointments that fit your life — not the other way around.",
				},
				{
					heading: "Support Beyond Medical Care",
					paragraph:
						"Need help with food, transportation, mental health, breastfeeding, or something else? We’re here for that, too.",
				},
				{
					heading: "Culturally Competent Care",
					paragraph:
						"Caregivers who listen, respect your experience, and honor your life, your history, your story.",
				},
				{
					heading: "Strong Partnerships",
					paragraph:
						"We work with OB/GYNs, pediatricians, and health plans to ensure coordinated, high-quality care.",
				},
			],
		};
	}

	const [activeIndex, setActiveIndex] = useState(0);

	const toggleAccordion = (index) => {
		setActiveIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section
			className={styles.section_Accordion}
			style={
				content.bgImgSrc
					? { backgroundImage: `url(${content.bgImgSrc})` }
					: undefined
			}
		>
			{content.heading && (
				<div className={styles.container_Heading}>
					<h2
						className={styles.heading_Accordion}
						dangerouslySetInnerHTML={{ __html: content.heading }}
					/>
					{content.paragraph && (
						<div dangerouslySetInnerHTML={{ __html: content.paragraph }} />
					)}
					{content.buttonLink && (
						<Button link={content.buttonLink} text={content.buttonText} />
					)}
				</div>
			)}

			{content.accordionContent?.length > 0 && (
				<div className={styles.container_Accordion}>
					{content.accordionContent.map((item, index) => {
						const isOpen = activeIndex === index;
						const contentRef = useRef(null);

						const handleKeyDown = (e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								toggleAccordion(index);
							}
						};

						useEffect(() => {
							const el = contentRef.current;
							if (el) {
								if (isOpen) {
									el.style.height = el.scrollHeight + "px";
								} else {
									el.style.height = "0px";
								}
							}
						}, [isOpen]);

						return (
							<div
								key={index}
								className={`${styles.accordion} ${isOpen ? styles.open : ""}`}
								onClick={() => toggleAccordion(index)}
								onKeyDown={handleKeyDown}
								role="button"
								tabIndex="0"
								aria-expanded={isOpen}
								aria-controls={`accordion-panel-${index}`}
								id={`accordion-button-${index}`}
							>
								{item.heading && <h3>{item.heading}</h3>}

								{item.paragraph && (
									<div
										id={`accordion-panel-${index}`}
										ref={contentRef}
										className={styles.accordion_Content}
										role="region"
										aria-labelledby={`accordion-button-${index}`}
										style={{
											overflow: "hidden",
											height: isOpen ? "auto" : "0px",
											transition: "height 0.2s linear",
										}}
									>
										<p>{item.paragraph}</p>
									</div>
								)}

								<div className={styles.plusMinus}></div>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default GlassAccordion;
