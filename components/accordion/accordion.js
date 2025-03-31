import { useState, useRef, useEffect } from "react";
import styles from "./accordion.module.scss";

const Accordion = ({ page }) => {
	let content = "";

	if (page === "providers") {
		content = {
			heading:
				"Answers to <span>your questions</span> about joining the network",
			headingPeriod: true,
			paragraph: "Have questions? We're here to help.",
			accordionContent: [
				{
					heading: "What are the benefits of being associated with CINQCARE?",
					paragraph:
						"CINQCARE is committed to improving health and care outcomes for high-needs communities. As a member of our network, providers gain access to value-based care contracts, financial incentives tied to quality and cost outcomes, advanced analytics, and an integrated care model designed to improve patient engagement and outcomes. Our network also supports providers with care coordination, quality improvement programs, in-home care services and administrative simplification to help practices succeed in value-based care arrangements.",
				},
				{
					heading:
						"What are the general terms of your contracts? For Duals? For ACO REACH?",
					paragraph:
						"Our contracts are structured to align quality and cost improvements with financial incentives. We can engage in full-risk arrangements where providers share in savings while benefiting from wraparound care services. We partner to drive better outcomes through advanced primary care models and risk-sharing agreements, ensuring financial sustainability for participating providers.",
				},
				{
					heading:
						"How will CINQCARE's integrated healthcare delivery system fit into my existing practice workflow? How will my patients benefit from the network's integrated services?",
					paragraph:
						"CINQCARE's care model is designed to complement existing practice workflows by integrating care coordination, real-time data insights, and provider support services. Your patients will benefit from enhanced chronic disease management, improved transitions of care, and better access to home-based and community support services. Our clinical care team collaborates with you to serve as an additional layer of care for your patients.",
				},
				{
					heading: "How will CINQCARE's model integrate into my EHR?",
					paragraph:
						"CINQCARE provides EHR-agnostic solutions that can integrate with your existing system. We offer data exchange tools, clinical decision support, and real-time patient insights (e.g. access to ADT feed) to enhance care coordination without disrupting workflows.",
				},
				{
					heading:
						"What level of support will I receive in implementing CINQCARE's care model and technologies?",
					paragraph:
						"Providers receive dedicated practice facilitation, including onboarding assistance, training sessions, and ongoing technical and operational support to ensure optimal performance in value-based care arrangements. Our in-home care model is meant to complement current clinical care -- never to replace them.",
				},
				{
					heading:
						"Will I retain autonomy in clinical decision-making, or will there be specific protocols I must follow?",
					paragraph:
						"Providers maintain full clinical autonomy while benefiting from CINQCARE's evidence-based best practices. We offer guidelines and decision-support tools but do not impose rigid protocols that override a physician's judgment.",
				},
				{
					heading:
						"How much influence do providers have in shaping care delivery strategies within the network?",
					paragraph:
						"CINQCARE values provider input and encourages participation in advisory councils, IPA Governance committees, quality committees, and feedback sessions to ensure that care delivery strategies are aligned with clinical realities and provider needs.",
				},
				{
					heading:
						"Will there be administrative burdens with reporting requirements?",
					paragraph:
						"CINQCARE minimizes administrative burdens by automating data collection and reporting where possible. In fact, participation in our ACO-REACH program may eliminate your Merit-Based Incentive Payment System (MIPS) reporting requirement.",
				},
				{
					heading:
						"How does CINQCARE define and measure quality, cost, and health equity outcomes?",
					paragraph:
						"We use industry-standard and proprietary measures to assess patient outcomes, cost savings, and health equity improvements. Metrics include avoidable hospitalizations, readmissions, total cost of care, and disparities in care access and outcomes. The specific measures are contract-dependent.",
				},
				{
					heading:
						"What benchmarks and performance indicators are used to assess provider success?",
					paragraph:
						"Key performance indicators (KPIs) include risk-adjusted cost metrics, clinical quality measures (HEDIS, STAR ratings), patient outreach and engagement rates, and care coordination effectiveness.",
				},
			],
		};
	} else if (page === "patients") {
		content = {
			heading:
				"Answers to <span>your questions</span> about joining the network",
			headingPeriod: true,
			paragraph: "Have questions? We're here to help.",
			accordionContent: [
				{
					heading: "What kind of care does CINQCARE provide?",
					paragraph:
						"CINQCARE partners with trusted providers in your community to offer primary care, in-home health visits, behavioral health support, and social services like transportation and food assistance.",
				},
				{
					heading: "Do I need insurance to receive care from CINQCARE?",
					paragraph:
						"CINQCARE works with many insurance plans, including Medicare and Medicaid. If you’re unsure about your coverage, we can help you navigate your options.",
				},
				{
					heading: "Can I get care at home, or do I need to visit a clinic?",
					paragraph:
						"We bring care to where you live. Depending on your needs, our team can arrange in-home visits, virtual consultations, or connect you to a local provider.",
				},
				{
					heading:
						"What kind of help can CINQCARE provide beyond medical care?",
					paragraph:
						"We know that health is about more than doctor's visits. We can help with transportation to appointments, access to healthy food, and social support services.",
				},
				{
					heading: "How do I sign up for CINQCARE services?",
					paragraph:
						"You can find a provider near you, call us for help enrolling, or ask your doctor about joining the CINQCARE network.",
				},
				{
					heading: "Will I have the same provider every time?",
					paragraph:
						"We prioritize continuity of care, so you’ll have a dedicated care team that knows you and supports your health journey over time.",
				},
			],
		};
	} else if (page === "for-moms") {
		content = {
			heading:
				"Answers to <span>your questions</span> about CINQCARE for Moms",
			headingPeriod: true,
			paragraph: "Expand to see common questions about CINQCARE for Moms.",
			accordionContent: [
				{
					heading: "What kind of care does CINQCARE for Moms provide?",
					paragraph:
						"CINQCARE for Moms offers pregnancy support, postpartum check-ins, and mental health care, as well services like food and transportation assistance.",
				},
				{
					heading: "Do I need insurance to receive support?",
					paragraph:
						"CINQCARE for Moms works with health plans and local programs. We can help you understand your coverage or connect you with resources to get coverage.",
				},
				{
					heading: "Can I receive care at home?",
					paragraph:
						"Yes! Our program anticipates in-home and virtual check-ins, along with connections to doctors and specialists near you.",
				},
				{
					heading:
						"Does CINQCARE for Moms replace my doctor?",
					paragraph:
						"No! We work with your OB doctor and primary care provider to make sure you have the best possible support throughout your pregnancy and postpartum journey.",
				},
				{
					heading: "How do I sign up?",
					paragraph:
						"Getting started is easy. Click below to connect with a care team member and see if you’re eligible.",
				},
			],
		};
	}

	const [activeIndex, setActiveIndex] = useState(0);

	const toggleAccordion = (index) => {
		setActiveIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section className={styles.section_Accordion}>
			<div className={styles.container_Heading}>
				<h2
					className={content.headingPeriod ? "period" : undefined}
					dangerouslySetInnerHTML={{ __html: content.heading }}
				/>
				<p dangerouslySetInnerHTML={{ __html: content.paragraph }} />
			</div>

			<div className={styles.container_Accordion}>
				{content.accordionContent?.map((item, index) => {
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
							<h3>{item.heading}</h3>

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

							<div className={styles.plusMinus}></div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Accordion;
