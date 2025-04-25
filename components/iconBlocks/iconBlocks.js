import styles from "./iconBlocks.module.scss";

const IconBlocks = ({ page }) => {
	let content = "";

	if (page === "providers") {
		content = {
			heading: "Why <span>trust</span> CINQCARE?",
			paragraph: "",
			subtext:
				"CINQCARE supports providers with care coordination and value-based program support. All medical decisions remain with licensed healthcare providers within our network.<br/><br/>" +
				"CINQCARE is a sponsor of the <a href='https://www.aahcm.org/' target='_blank'>American Academy of Home Care Medicine (AAHCM)</a>",
			fourBlocks: false,
			iconBlocks: [
				{
					icon: "icons/Award.svg",
					heading: "A network rooted in purpose",
					paragraph:
						"Join a growing movement of purpose-aligned, community-based providers working to transform care since 2022.",
				},
				{
					icon: "icons/Graph.svg",
					heading: "Actionable data and measurable impact",
					paragraph:
						"We equip providers with insights to track outcomes, improve quality metrics, and strengthen practice performance.",
				},
				{
					icon: "icons/Health.svg",
					heading: "Aligned Incentives for smarter practice growth",
					paragraph:
						"We help ensure that the dedicated care you deliver is recognized and rewarded through value-based payment opportunities.",
				},
				{
					icon: "icons/Twinkle.svg",
					heading: "Real expertise",
					paragraph:
						"Our approach is informed by decades of experienced leadership and lived experience in high-needs, urban, and rural communities.",
				},
				{
					icon: "icons/Doctor.svg",
					heading: "Access to resources",
					paragraph:
						'We connect patients (whom we call “Family Members”) to care navigators, behavioral health experts, and community resources, strengthening relationships and improving outcomes.',
				},
			],
		};
	} else if (page === "patients") {
		content = {
			heading: "Why <span>trust</span> CINQCARE?",
			paragraph:
				"This is for the communities that raised us. At CINQCARE, we're giving back to the cities and towns where we came from — with the kind of care we want for our own families.",
			subtext: "",
			fourBlocks: false,
			iconBlocks: [
				{
					icon: "icons/Award.svg",
					heading: "A doctor who listens",
					paragraph:
						"We connect you to trusted providers who understand where you're coming from and take the time to know you.",
				},
				{
					icon: "icons/House.svg",
					heading: "Care where you live",
					paragraph:
						"We offer in-home services, nurse visits, therapy, and check-ins to help you stay healthy where you feel most comfortable through our Grace at Home program.",
				},
				{
					icon: "icons/Basket.svg",
					heading: "Help beyond healthcare",
					paragraph:
						"Need a ride? Support with food? Help navigating your care? We're here for you.",
				},
				{
					icon: "icons/DoctorsBag.svg",
					heading: "Someone in your corner",
					paragraph:
						"A dedicated care coordinator stays with you, helping every step of the way — just like family.",
				},
			],
		};
	} else if (page === "partners") {
		content = {
			heading: "Why partner with <span>us</span>?",
			paragraph:
				"We’re working with healthcare organizations leading lasting change in high-needs, urban, and rural communities, including Medicare & Dual Special Needs Plans (D-SNPs), State Medicaid & Managed Care Organizations (MCOs), ACO REACH, and risk-based payer models, as well as state and federal health programs.",
			subtext:
				"CINQCARE partners with payers and government agencies to provide care coordination, operational expertise, and non-clinical support. All medical care is delivered by independently owned and operated medical practices within the CINQCARE network.",
			fourBlocks: false,
			iconBlocks: [
				{
					icon: "icons/Caution.svg",
					heading: "Risk-Driven, Whole-Person Care",
					paragraph:
						"Using advanced risk stratification to identify high-cost, high-needs members across medical, behavioral, and social needs, and providing personalized interventions that lower Medical Loss Ratio (MLR) and improve STAR/HEDIS performance.",
				},
				{
					icon: "icons/HoldingHeart.svg",
					heading: "High-Touch, High-Impact, Integrated Care Model",
					paragraph:
						"Delivering end-to-end care through care coordination, home-based services, behavioral health, and social services interventions designed for specific population needs and reaching the right members at the right time.",
				},
				{
					icon: "icons/Mountains.svg",
					heading: "Expanding Access in Hard-to-Reach Populations",
					paragraph:
						"Our rural, home-based, and alternative care models are reducing barriers to care, lowering hospitalizations and emergency department visits.",
				},
				{
					icon: "icons/Income.svg",
					heading: "Lowering Total Cost of Care (TCOC)",
					paragraph:
						"Multi-channel engagement strategies ensure members receive preventive and chronic care management, reducing acute events and costly inpatient stays.",
				},
				{
					icon: "icons/MedicalFiles.svg",
					heading: "Seamless Alignment with Value-Based Models",
					paragraph:
						"Whether through ACO REACH, risk-based contracts, or Medicaid managed care, we're helping payers maximize shared savings and quality incentives.",
				},
			],
		};
	} else if (page === "grace-at-home") {
		content = {
			heading: "Who We <em>Serve</em>",
			paragraph: "We bring the doctor to you. We specialize in serving:",
			subtext: "",
			fourBlocks: true,
			iconBlocks: [
				{
					icon: "icons/Wheelchair.svg",
					heading: "Homebound and Mobility-Limited Adults",
				},
				{
					icon: "icons/Head-Pain.svg",
					heading: "People Managing Chronic Conditions",
				},
				{
					icon: "icons/Walker.svg",
					heading: "Seniors and Adults with Cognitive Decline",
				},
				{
					icon: "icons/Hospital.svg",
					heading: "People Transitioning from Hospital to Home",
				},
			],
		};
	} else if (page === "care-medical-practice") {
		content = {
			heading: "What We Offer",
			paragraph:
				"Care Medical Practice brings together everything you need to stay healthy — from checkups to specialty services — close to home, with a care team that knows you.",
			subtext: "",
			fourBlocks: false,
			iconBlocks: [
				{
					icon: "icons/Provider.svg",
					heading: "Primary Care",
					paragraph:
						"Wellness visits, chronic condition management, and preventive screenings.",
				},
				{
					icon: "icons/Xray.svg",
					heading: "Diagnostic and Specialty Services",
					paragraph:
						"X-rays, EKGs, ultrasounds, stress tests, and physical therapy.",
				},
				{
					icon: "icons/Brain.svg",
					heading: "Behavioral and Mental Health",
					paragraph:
						"Therapy and support for emotional and psychological well-being.",
				},
				{
					icon: "icons/Communication.svg",
					heading: "Care Coordination",
					paragraph: "Guidance and support from a dedicated team.",
				},
				{
					icon: "icons/Hierarchy-of-Needs.svg",
					heading: "Supportive Services",
					paragraph:
						"Including nutrition counseling, community-based support, and health education.",
				},
			],
		};
	}

	return (
		<section className={styles.section_IconBlocks}>
			{(content.heading || content.paragraph) && (
				<div className={styles.heading_IconBlocks}>
					{content.heading && (
						<h2 dangerouslySetInnerHTML={{ __html: content.heading }} />
					)}
					{content.paragraph && (
						<p dangerouslySetInnerHTML={{ __html: content.paragraph }} />
					)}
				</div>
			)}

			{content.iconBlocks?.length > 0 && (
				<div
					className={`${styles.container_IconBlocks} ${
						content.fourBlocks ? styles.fourBlocks : "undefined"
					}`}
				>
					{content.iconBlocks.map((item, index) => (
						<div className={styles.iconBlock} key={index}>
							{item.icon && <img src={item.icon} loading="lazy" alt="" />}
							{item.heading && (
								<h3 dangerouslySetInnerHTML={{ __html: item.heading }} />
							)}
							{item.paragraph && (
								<p dangerouslySetInnerHTML={{ __html: item.paragraph }} />
							)}
						</div>
					))}
				</div>
			)}

			{content.subtext && (
				<p
					className={styles.subtext_IconBlocks}
					dangerouslySetInnerHTML={{ __html: content.subtext }}
				/>
			)}
		</section>
	);
};

export default IconBlocks;
