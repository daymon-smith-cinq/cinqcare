import { useState, useRef} from "react";
import styles from "./accordion.module.scss";

const Accordion = ({ page }) => {
	let content = "";

	if (page === "providers") {
		content = {
			heading:
				"Answers to <span>your questions</span> about joining the network",
			headingPeriod: true,
			paragraph: "",
			accordionContent: [
				{
					heading: "What are the benefits of being associated with CINQCARE?",
					paragraph:
						"CINQCARE is committed to improving health and care outcomes for high-needs, urban and rural communities. As a member of our network, providers gain access to value-based care contracts, financial incentives tied to quality and cost outcomes, advanced analytics, and an integrated care model designed to improve patient engagement and outcomes. Our network also supports providers with care coordination, quality improvement programs, in-home care services and administrative simplification to help practices succeed in value-based care arrangements.",
				},
				{
					heading:
						"What are the general terms of your contracts? For Duals? For ACO REACH?",
					paragraph:
						"Our contracts are structured to align quality and cost improvements with financial incentives. We can engage in full-risk arrangements where providers share in savings while benefiting from wraparound care services. We partner to drive better outcomes through advanced primary care models and risk-sharing agreements, ensuring financial sustainability for participating providers. Note: providers are not required to take risk in contracts.",
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
						"CINQCARE provides EHR-agnostic solutions that can integrate with your existing system. We offer data exchange tools, clinical decision support, and real-time patient insights (e.g., access to ADT feed) to enhance care coordination without disrupting workflows.",
				},
				{
					heading:
						"What level of support will I receive in implementing CINQCARE's care model and technologies?",
					paragraph:
						"Providers receive dedicated practice facilitation, including onboarding assistance, training sessions, and ongoing technical and operational support to ensure optimal performance in value-based care arrangements. Our in-home care model is meant to complement current clinical care — never to replace them.",
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
						"CINQCARE values provider input and encourages participation in advisory councils, IPA governance committees, quality committees, and feedback sessions to ensure that care delivery strategies are aligned with clinical realities and provider needs.",
				},
				{
					heading:
						"Will there be administrative burdens with reporting requirements?",
					paragraph:
						"CINQCARE minimizes administrative burdens by automating data collection and reporting where possible. In fact, participation in our <a href='https://aco.cinq.care/' target='_blank'>ACO REACH</a> program may eliminate your Merit-based Incentive Payment System (MIPS) reporting requirement. You can also learn more about our <a href='https://advancedillnesspartners.org/' target='_blank'>Advanced Illness Partners program here</a>.",
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
						"CINQCARE works with many insurance plans, including Medicare. If you’re unsure about your coverage, we can help you navigate your options. If you are a Medicaid member, you might be eligible to become a part of the <a href='https://cinqcarehealthhome.com/' target='_blank'>CINQCARE Health Home</a> community.",
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
	} else if (page === "grace-at-home") {
		content = {
			heading:
				"Answers to <span>your questions</span> about <br/>Grace at Home",
			headingPeriod: true,
			paragraph: "",
			accordionContent: [
				{
					heading: "What kinds of help is available for caregivers?",
					paragraph:
						"Our expert team will assess your most pressing challenges and pain points to understand your unique situation and work together to build an actionable, tailored support plan for meeting your goals. We offer a Caregiver Navigation Support Specialist for you as the family member, or your caregiver, to help navigate complex situations like insurance, home care, and housing. Specialists are based out of the communities they serve; you or your caregiver can always be assured that support is grounded in a localized understanding. You and your caregiver are provided an education platform with resources, training, and expert guidance, as well as 24/7 access to legal support, financial planning, and care management.",
				},
				{
					heading: "What does a care coordinator do?",
					paragraph:
						"This role acts as your quarterback for coordinating and navigating care to support both you and your caregiver, both away and at home, facilitating communication across care teams, support services and your medical providers.",
				},
				{
					heading: "Can you help me stay in my home?",
					paragraph:
						"Our collaborative of in-home support services, clinicians, and handymen can work alongside you and your caregivers to identify and overcome functional, social, and medical barriers that may impede everyday living in your current home. Our goal is to help you remain in your home safely for as long as possible. We are also committed to helping you make a smooth transition if the time comes where an alternative living situation becomes necessary.",
				},
			],
		};
	} else if (page === "for-moms") {
		content = {
			heading:
				"Answers to <span>your questions</span> about <br/>CINQCARE for Moms",
			headingPeriod: true,
			paragraph: "Expand to see common questions about CINQCARE for Moms.",
			finePrint: 
				"<p class='fine-print'>Grace Women’s Center is an independently owned and operated medical practice that contracts with CINQ Connect for administrative and operational support. CINQCARE does not provide medical care or make clinical decisions.</p>",
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
						"Getting started is easy. Click above to connect with a care team member and see if you’re eligible.",
				},
			],
		};
	} else if (page === "care-medical-practice") {
		content = {
			heading:
				"Answers to <span>your questions</span> about <br/>Care Medical Practice",
			headingPeriod: true,
			paragraph: "",
			accordionContent: [
				{
					heading: "What does it mean to coordinate my care?",
					paragraph:
						"Life often gets in the way of getting the health and care you need. Sometimes the problem is confusing paperwork or an issue with language translation or even housing. You may not be aware of important benefits for which you are eligible. Care Medical Practice, which has partnered in purpose with CINQCARE, works with you to navigate these barriers so you can access the care you need. Services can include: translation help for those who have limited English proficiency, help with navigating the health insurance system, referrals to other healthcare providers or community resources for additional services or support, and patient education to help you advocate for your health needs.",
				},
				{
					heading: "What is special about your approach to diagnosis and treatment plans?",
					paragraph:
						"When healthcare providers assume they know you, your background and your lifestyle, their diagnosis and treatment plans can lack the effectiveness you deserve. We start with you - the patient and your caregiver - to understand your needs. Our clinical team - which includes nurses, nurse practitioners, social workers, pharmacists, and physicians - seeks to understand you, not just the symptoms of your illness or condition, when making a diagnosis and proposing a treatment plan for your health and recovery. Services can include: access to a state-of-the-art onsite laboratory, x-rays, EKGs for heart related problems, drug screenings, pregnancy testing, preoperative testing, vaccinations, work-related services, and a mobile health clinic that comes to your neighborhood.",
				},
				{
					heading: "What is a check-up like with Care Medical Practice?",
					paragraph:
						"In communities with high-needs, higher rates of chronic disease or a lack of cultural fluency among healthcare providers, even a regular check-up cannot be routine. That’s why we provide compassionate, culturally-responsive care in everything we do. Services can include: a detailed review of your medical history, physical exam, lab tests, health risk assessments, lifestyle counseling, vaccinations, and specialist referrals when needed.",
				},
				{
					heading:
						"Can you help me manage my medications?",
					paragraph:
						"Often-overlooked factors can influence how well a certain prescription or medication works. There is no ‘one size fits all’ medication solution for people and communities that come in all shapes and sizes. That’s why we take a different approach to matching you to your medications and care plan. We aim for prescriptions and medications that are based on you, not statistics. Services can include: medication management, refill authorizations, medical education, and collaboration with your pharmacy.",
				},
				{
					heading: "Can behavioral health treatment and therapy be included?",
					paragraph:
						"Providing a range of treatments and therapies for medical health and substance use disorders is an important part of caring for the whole you — not just the physical part. Care Medical Practice works to help our Family Members understand and manage their symptoms, improve overall mental well-being, and achieve treatment goals. Services can include: mental health assessments, individual therapy, medication management, specialist referrals, and patient education.",
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
				<h3
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
							<h4>{item.heading}</h4>

							<div
								id={`accordion-panel-${index}`}
								ref={contentRef}
								className={styles.accordion_Content}
								role="region"
								aria-labelledby={`accordion-button-${index}`}
								style={{
									gridTemplateRows: isOpen ? "1fr" : "0fr",
									transition: "all 0.3s ease-in-out",
								}}
							>
								<div className={styles.accordion_hiddenContainer}>
									<p dangerouslySetInnerHTML={{ __html: item.paragraph }}></p>
								</div>
							</div>

							<div className={styles.plusMinus}></div>
						</div>
					);
				})}
			</div>

			{content.finePrint && (
				<div 
					className={styles.finePrint}
					dangerouslySetInnerHTML={{ __html: content.finePrint }}
				/>
			)}
		</section>
	);
};

export default Accordion;
