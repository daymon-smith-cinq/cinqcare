import styles from "./iconBlocks.module.scss";

const IconBlocks = ({ page }) => {
	let content = "";

	if (page === "providers") {
		content = {
			heading: "Why <span>trust</span> CINQCARE as your practice's partner?",
			paragraph: "",
			subtext: "",
			fourBlocks: false,
			iconBlocks: [
				{
					icon: "icons/Award.svg",
					heading: "A network rooted in purpose",
					paragraph:
						"Join a growing movement of purpose-aligned, community-based providers working to transform care since 2020.",
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
						'We connect patients (whom we call "Family Members") to care navigators, behavioral health experts, and community, strengthening relationships and improving outcomes.',
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
				"We’re working with healthcare organizations leading lasting change in their high-need, urban and rural communities, including Medicare & Dual Special Needs Plans (D-SNPs), State Medicaid & Managed Care Organizations (MCOs), ACO REACH & Risk-Based Payer Models as well as State and Federal Health Programs",
			subtext: "",
			fourBlocks: false,
			iconBlocks: [
				{
					icon: "icons/Caution.svg",
					heading: "Risk-Driven, Whole-Person Care",
					paragraph:
						"Using advanced risk stratification to identify high-cost, high-needs members across medical, behavioral, and social needs, and providing personalized interventions that lower MLR and improve STAR/HEDIS performance.",
				},
				{
					icon: "icons/HoldingHeart.svg",
					heading: "High-Touch, High-Impact, Integrated Care Model",
					paragraph:
						"Delivering wraparound care through care coordination, home-based services, behavioral health, and SDOH interventions designed for specific population needs and reaching the right members at the right time.",
				},
				{
					icon: "icons/Mountains.svg",
					heading: "Expanding Access in Hard-to-Reach Populations",
					paragraph:
						"Our rural, home-based, and alternative site care models are reducing barriers to care, lowering hospitalizations and ED visits.",
				},
				{
					icon: "icons/Income.svg",
					heading: "Lowering Total Cost of Care (TCOC)",
					paragraph:
						"Multi-channel engagement strategies are ensuring members receive preventive and chronic care management, reducing acute events and costly inpatient stays.",
				},
				{
					icon: "icons/MedicalFiles.svg",
					heading: "Seamless Alignment with Value-Based Models",
					paragraph:
						"Whether through ACO REACH, risk-based contracts, or Medicaid managed care, we're helping payers maximize shared savings and quality incentives.",
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
				<div className={styles.container_IconBlocks}>
					{content.iconBlocks.map((item, index) => (
						<div
							className={`${styles.iconBlock} ${
								content.fourBlocks ? styles.fourBlocks : ""
							}`}
							key={index}
						>
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
