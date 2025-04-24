import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";

export default function PrivacyPolicy() {
	// Define current page
	const currentPage = "privacy-policy-practices";

	// SEO
	const title =
		"Privacy Policy - Care At Home Notice of Privacy Practices | CINQCARE";
	const metaDescription =
		"CINQCARE’s Privacy Policy details how we collect, use, disclose, and protect your personal information securely.";
	const pageURL = "https://cinq.care/privacy-policy-practices";
	const opengraphImg = "https://cinq.care/cinqcare-opengraph.jpg";

	return (
		<>
			<Head>
				<meta name="description" content={metaDescription} />
				<meta property="og:image" content={opengraphImg} />
				<meta property="og:title" content={title} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={pageURL} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@carecinq" />
				<title>{title}</title>
			</Head>

			<Header headerBg="light" />

			<main className="gradient--top">
				<section page={currentPage}>
					<div className="wrapper">
						<h2>CARE AT HOME</h2>
						<h3>NOTICE OF PRIVACY PRACTICES</h3>
						<p style={{ fontWeight: "600" }}>
							This Notice describes how medical information about you may be
							used and disclosed and how you can get access to this information.
							Please review this Notice carefully.
						</p>

						<h3 style={{ fontWeight: "600" }}>I. GENERAL INFORMATION</h3>
						<p>
							This Notice describes the practices that Care at Home Medical
							Practice (“Care at Home,” “we,” “us,” or “our”) will follow with
							regard to your “protected health information” (“PHI”).
						</p>
						<p>
							PHI is a special term, defined by the Health Insurance Portability
							and Accountability Act of 1996 (“HIPAA”) and its regulations (the
							“Privacy Rule”). PHI means individually identifiable health
							information (including demographic information) that is created or
							received by certain health care providers, a health plan, or a
							health care clearinghouse and relates to: (i) your past, present,
							or future physical or mental health or condition; (ii) the
							delivery of health care to you; or (iii) the past, present, or
							future payment for the delivery of health care to you. For
							purposes of this Notice, PHI includes information related to our
							provision of health care services, which may include, without
							limitation, your symptoms, examination and test results,
							diagnoses, treatment, and billing and insurance records. We need
							this information to provide you with quality care and to comply
							with certain legal requirements.
						</p>
						<p>
							This Notice applies to all PHI that Care at Home maintains. Other
							parties involved in the provision of your health services, such as
							other health care providers or your insurance company, may have
							different policies or notices related to their use and disclosure
							of PHI.
						</p>
						<p>
							You may have additional rights under state law. State laws that
							provide greater privacy protection or broader privacy rights will
							continue to apply.
						</p>

						<h3 style={{ fontWeight: "600" }}>
							II. OUR RIGHTS AND OBLIGATIONS
						</h3>
						<ul
							style={{
								listStyleType: "disc",
								listStylePosition: "inside",
								fontSize: "clamp(1.125rem, 1vw + 1rem, 1.25rem)",
								marginBottom: "20px",
								display: "flex",
								flexDirection: "column",
								gap: "10px",
							}}
						>
							<li style={{ lineHeight: "1.2" }}>
								We are required by law to maintain the privacy of your PHI.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								We are required to give you this Notice about our privacy
								practices, our legal duties, and your rights concerning your
								PHI.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								We are required to follow the privacy practices described in
								this Notice. These privacy practices will remain in effect until
								we replace or modify them.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								We are required to notify you following a breach of unsecured
								PHI.
							</li>
						</ul>

						<p>
							We reserve the right to change our privacy practices and the terms
							of this Notice at any time, provided that the change is permitted
							by law. We reserve the right to have such a change affect all PHI
							we maintain, including PHI we received or created before the
							change. We will post a copy of the revised notice in our office
							and on our website. You may request a copy of the current Notice
							from us at any time.
						</p>

						<h3 style={{ fontWeight: "600" }}>
							III. HOW THE PLAN MAY USE AND DISCLOSE YOUR PHI
						</h3>
						<p style={{ fontWeight: "600" }}>
							Uses and Disclosures for Treatment, Payment, and Health Care
							Operations
						</p>

						<ul
							style={{
								listStyleType: "disc",
								listStylePosition: "inside",
								fontSize: "clamp(1.125rem, 1vw + 1rem, 1.25rem)",
								marginBottom: "20px",
								display: "flex",
								flexDirection: "column",
								gap: "10px",
							}}
						>
							<li style={{ lineHeight: "1.2" }}>
								<span
									style={{
										fontWeight: "600",
										fontSize: "inherit",
									}}
								>
									For Treatment.
								</span>{" "}
								We may use health information about you to provide you with
								medical treatment or services. For example, we may disclose
								health information about you to our doctors, nurses, or
								technicians, to a hospital, or to others involved in taking care
								of you, such as a physician to whom you have been referred, to
								ensure that he or she has the necessary information to diagnose
								or treat you, to a home health agency that provides care to you,
								or to a pharmacy that fills your prescription.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									For Payment.
								</span>{" "}
								We may use and disclose your PHI for all activities that are
								included within the definition of “payment” set out in the
								Privacy Rule. For example, we may use and disclose your PHI to
								bill and collect payment from you, an insurance company, a
								governmental entity such as Medicare or Medicaid, or a third
								party. We may also use and disclose your PHI to obtain prior
								authorization or to determine whether your health plan will
								cover a treatment.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									For Health Care Operations.
								</span>{" "}
								We may use and disclose your PHI for all activities that are
								included within the definition of “health care operations” set
								out in the Privacy Rule. For example, we may use and disclose
								your PHI to contact you about your appointments, to review our
								treatment and services, to evaluate the performance of our staff
								in caring for you, to educate our professionals, and for other
								administrative activities. We may also combine health
								information about many patients to decide what additional
								services we should offer, what services are not needed, and
								whether certain new treatments are effective.
							</li>
						</ul>

						<p style={{ fontWeight: "600" }}>
							Uses & Disclosures to Other Entities
						</p>

						<ul
							style={{
								listStyleType: "disc",
								listStylePosition: "inside",
								fontSize: "clamp(1.125rem, 1vw + 1rem, 1.25rem)",
								marginBottom: "20px",
								display: "flex",
								flexDirection: "column",
								gap: "10px",
							}}
						>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Business Associates.
								</span>{" "}
								We may disclose your PHI to a “business associate.” Our business
								associates are the individuals and entities we engage to perform
								various duties on our behalf, or to provide services that we
								have requested. For example, our business associates might
								provide billing services. Business associates are permitted to
								receive, create, maintain, use, or disclose PHI, but only as
								provided in the Privacy Rule, and only after agreeing in writing
								to appropriately safeguard your PHI.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Other Covered Entities.
								</span>{" "}
								We may disclose your PHI to a HIPAA-covered health care
								provider, health plan, or health care clearinghouse, in
								connection with their treatment, payment, or health care
								operations.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Health Information Exchanges.
								</span>{" "}
								We may disclose your PHI to a health information exchange (HIE)
								to facilitate the secure exchange of PHI among health care
								providers and other health care entities, such as your health
								insurance plan, as permitted by law. In some states, the
								inclusion of your medical information is voluntary and subject
								to your right to opt-in or opt-out. If you choose to opt-in or
								not to opt-out, we may provide your medical information in
								accordance with the law applicable to the HIEs in which we
								participate.
							</li>
						</ul>

						<p style={{ fontWeight: "600" }}>
							Uses and Disclosures for Which Your Permission May Be Sought.
						</p>
						<p>
							For purposes of this subsection only, the following conditions
							apply: If you are present and able to give your verbal permission,
							we will use or disclose your PHI with your permission. This verbal
							permission will cover only a single encounter, and it is not a
							substitute for a written authorization. If you are not present or
							are unable to give your permission, we will use or disclose your
							PHI only if we determine (based on our professional judgment) that
							the use or disclosure is in your best interest.
						</p>

						<ul
							style={{
								listStyleType: "disc",
								listStylePosition: "inside",
								fontSize: "clamp(1.125rem, 1vw + 1rem, 1.25rem)",
								marginBottom: "20px",
								display: "flex",
								flexDirection: "column",
								gap: "10px",
							}}
						>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									To Others Involved in Your Care.
								</span>{" "}
								We may use or disclose your PHI to a relative or other
								individual who you have identified as being involved in your
								health care. If you are not present, our disclosure will be
								limited to the PHI that directly relates to the individual’s
								involvement in your health care.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									For Limited Notification Purposes.
								</span>{" "}
								We may use or disclose your PHI to help notify a relative, or
								other individual who is responsible for your health care, of
								your location, general condition, or death.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									To Assist in Disaster Relief.
								</span>{" "}
								We may disclose your PHI to an authorized public or private
								entity in order to assist in disaster relief efforts, or to
								coordinate uses and disclosures to relatives or other
								individuals involved in your health care.
							</li>
						</ul>

						<p style={{ fontWeight: "600" }}>
							Other Permitted Uses and Disclosures
						</p>

						<ul
							style={{
								listStyleType: "disc",
								listStylePosition: "inside",
								fontSize: "clamp(1.125rem, 1vw + 1rem, 1.25rem)",
								marginBottom: "20px",
								display: "flex",
								flexDirection: "column",
								gap: "10px",
							}}
						>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									To the Secretary.
								</span>{" "}
								We may disclose your PHI to the Secretary of the Department of
								Health and Human Services, when required to do so, to enable the
								Secretary to investigate or determine our compliance with HIPAA
								and the Privacy Rule.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									As Required By Law.
								</span>{" "}
								We may disclose your PHI when required to do so by federal,
								state, or local law.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									For Public Health Activities.
								</span>{" "}
								We may use or disclose your PHI for public health activities
								that are permitted or required by law. For example, we may
								disclose your PHI to a public health entity that is authorized
								by law to collect information for the purpose of reporting
								diseases, illnesses, births, or deaths.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Disclosures About Abuse, Neglect, and Domestic Violence.
								</span>{" "}
								We may disclose your PHI, consistent with applicable federal and
								state laws, if we believe that you have been a victim of abuse,
								neglect, or domestic violence. Such disclosure will be made to
								the governmental entity or agency authorized to receive such
								information.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Health Oversight Activities.
								</span>{" "}
								We may disclose your PHI to a health oversight agency for
								activities authorized by law. The relevant agencies include
								governmental units that oversee or monitor the health care
								system, government benefit and regulatory programs, and
								compliance with civil rights laws. The relevant activities
								include, for example, audits, investigations, inspections, and
								licensure.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Legal Proceedings.
								</span>{" "}
								We may disclose your PHI in the course of a judicial or
								administrative proceeding.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Law Enforcement.
								</span>{" "}
								Under limited circumstances (such as required reporting laws or
								in response to a grand jury subpoena), we may disclose your PHI
								to law enforcement officials.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Coroners, Medical Examiners, and Funeral Directors.
								</span>{" "}
								We may disclose your PHI to a coroner, medical examiner, or
								funeral director as necessary for them to carry out their
								duties.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Organ and Tissue Donation.
								</span>{" "}
								If you are an organ donor, we may disclose your PHI to
								organizations that handle organ procurement or organ, eye, or
								tissue transplantation, or to an organ donation bank, as
								necessary to facilitate organ or tissue donation and
								transplantation.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Research.
								</span>{" "}
								We may disclose your PHI to researchers when an institutional
								review board or a privacy board has (a) reviewed the research
								proposal and established protocols to ensure the privacy of the
								information; and (b) approved the research.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Serious Threat to Health or Safety.
								</span>{" "}
								We may use and disclose your PHI when necessary to prevent a
								serious threat to your health and safety, or to the health and
								safety of others. Any such disclosure will be made to someone
								who would be able to help prevent the threat.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Specialized Government Functions.
								</span>{" "}
								We may disclose your PHI, if you are in the Armed Forces, for
								activities deemed necessary by appropriate military command
								authorities, for determination of benefit eligibility by the
								Department of Veterans Affairs, or to foreign military
								authorities if you are a member of that foreign military
								service. We may disclose your PHI to authorized federal
								officials for conducting national security and intelligence
								activities (including for the provision of protective services
								to the President of the United States) or to the Department of
								State to make medical suitability determinations. If you are an
								inmate at a correctional institution, then under certain
								circumstances we may disclose your PHI to the correctional
								institution.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Workers’ Compensation.
								</span>{" "}
								We may disclose your PHI to the extent necessary to comply with
								laws concerning workers’ compensation or to comply with similar
								programs that are established by law and provide benefits for
								work-related injuries or illness.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Reminders.
								</span>{" "}
								We may use and disclose your PHI by sending you a reminder for
								important services, such as annual checkups.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Fundraising.
								</span>{" "}
								We may use and disclose your PHI by sending you fundraising
								communications. You have the right to opt out of receiving such
								communications. You can do so by contacting the Contact Office.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Additional Services.
								</span>{" "}
								We may use or disclose your PHI to send you information about
								alternative medical treatments and programs, or about
								health-related products and services that may be of interest to
								you, provided Care at Home does not receive financial
								remuneration for making such communications.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Disclosures as Part of an Organized Health Care Arrangement
									(OHCA).
								</span>{" "}
								If we participate in an OHCA with other entities, we may use and
								disclose your PHI to the other entities to carry out treatment,
								payment, and health care operations relating to this
								arrangement.
							</li>
						</ul>

						<p style={{ fontWeight: "600" }}>
							Uses and Disclosures with an Authorization.
						</p>
						<p>
							Before we can use or disclose your PHI for a reason that is not
							listed in this Section III, we are required to obtain your written
							authorization. In addition, we are required to obtain your
							authorization under the following circumstances:
						</p>

						<ul
							style={{
								listStyleType: "disc",
								listStylePosition: "inside",
								fontSize: "clamp(1.125rem, 1vw + 1rem, 1.25rem)",
								marginBottom: "20px",
								display: "flex",
								flexDirection: "column",
								gap: "10px",
							}}
						>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Psychotherapy Notes.
								</span>{" "}
								Most uses and disclosures of psychotherapy notes will require
								your authorization.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Marketing.
								</span>{" "}
								Uses and disclosures of PHI for marketing purposes, unless
								allowed by HIPAA, the Privacy Rule, or applicable law, will
								require your authorization. Marketing communications allowed
								without authorization include communications pertaining to care
								or treatment and/or our services.
							</li>
							<li style={{ lineHeight: "1.2" }}>
								<span style={{ fontWeight: "600", fontSize: "inherit" }}>
									Sale of PHI.
								</span>{" "}
								Disclosures that constitute a “sale” of PHI under HIPAA or the
								Privacy Rule will require your authorization.
							</li>
						</ul>

						<p>
							You may revoke your authorization at any time, except when we have
							already relied on that authorization. You must do so in writing.
							You can obtain an authorization form from the following address:
						</p>

						<address
							style={{
								fontSize: "clamp(1.125rem, 1vw + 1rem, 1.25rem)",
								marginBottom: "20px",
								lineHeight: "1.4",
							}}
						>
							<strong style={{ fontWeight: "500" }}>Privacy Office</strong>
							<br />
							564 Niagara St
							<br />
							Building #2
							<br />
							Buffalo, NY 14201
						</address>

						<h3 style={{ fontWeight: "600" }}>
							IV. YOUR RIGHTS REGARDING YOUR PHI
						</h3>
						<p style={{ fontWeight: "600" }}>Right to Inspect and Copy</p>
						<p>
							You have the right to inspect and copy your PHI. You must submit
							your request in writing to the Contact Office. If you request a
							copy of your PHI, we may charge a fee for the costs of copying,
							mailing, or other supplies associated with your request. We may
							deny your request to inspect and copy in certain very limited
							circumstances; if we deny you access to your PHI, you may request
							that the denial be reviewed.
						</p>
						<p>
							The Privacy Rule contains a few exceptions to this right. You do
							not have the right to inspect or copy, among other things,
							psychotherapy notes or materials that are compiled in anticipation
							of litigation or similar proceedings.
						</p>
						<p style={{ fontWeight: "600" }}>Right to Request an Amendment</p>
						<p>
							If you believe that the PHI we have about you is incorrect or
							incomplete, you may ask us to amend the PHI. You have the right to
							request an amendment for as long as the PHI is kept by or for Care
							at Home. Your request must be in writing and must include a reason
							or explanation that supports your request. Request forms are
							available from and must be submitted to the following address:
						</p>

						<address
							style={{
								fontSize: "clamp(1.125rem, 1vw + 1rem, 1.25rem)",
								marginBottom: "20px",
								lineHeight: "1.4",
							}}
						>
							<strong style={{ fontWeight: "500" }}>Privacy Office</strong>
							<br />
							564 Niagara St
							<br />
							Building #2
							<br />
							Buffalo, NY 14201
						</address>

						<p>
							If we approve your request, we will include the amendment in any
							future disclosures of the relevant PHI. If we deny your request
							for an amendment, you may file a written statement of
							disagreement, which we may rebut in writing. The denial, statement
							of disagreement, and rebuttal will be included in any future
							disclosures of the relevant PHI.
						</p>

						<p>
							We may deny your request for an amendment if it is not in writing
							or does not include a reason to support the request. In addition,
							we may deny your request if you ask us to amend PHI that: is not
							part of the PHI kept by or for Care at Home; was not created by
							us, unless the person or entity that created the information is no
							longer available to make the amendment; is not part of the
							information which you would be permitted to inspect and copy; or
							is accurate and complete. All denials will be made in writing.
						</p>

						<p style={{ fontWeight: "600" }}>
							Right to an Accounting of Disclosures
						</p>

						<p>
							You have the right to request an “accounting” of the instances in
							which we disclosed your PHI for up to six years before the date of
							your request. Certain disclosures are exempt from the accounting
							requirement.
						</p>
						<p>
							Your request must be in writing. The request must include the time
							frame that you would like us to cover. Request forms are available
							from and must be submitted to the Contact Office. In certain
							circumstances, we may charge you for the cost of providing the
							accounting. We will notify you of the cost involved and you may
							choose to withdraw or modify your request at that time before any
							costs are incurred.
						</p>
						<p style={{ fontWeight: "600" }}>Right to Request Restrictions</p>
						<p>
							You have the right to request that we restrict the PHI about you
							we use or disclose for treatment, payment, or health care
							operations. You also have the right to request that we restrict
							the PHI about you we disclose to someone who is involved in your
							care or the payment of your care, like a family member or friend.
							For example, you could ask that we not use or disclose information
							about a surgery you had. We are not required to agree to your
							request except when a restriction has been requested related to a
							disclosure to a health plan in circumstances where you (or someone
							on your behalf) have paid for services in full and where the
							purpose of the disclosure is for payment.
						</p>
						<p>
							Your request must be in writing. In your request, you must tell us
							(1) what information you want to limit; (2) whether you want to
							limit our use, disclosure, or both; and (3) to whom you want the
							limits to apply, for example, disclosure to your spouse. Request
							forms are available from and must be submitted to the Contact
							Office.
						</p>
						<p style={{ fontWeight: "600" }}>
							Right to Request Confidential Communications
						</p>
						<p>
							You have the right to request that we communicate with you about
							medical matters in a certain way or at a certain location. For
							example, you can ask that we only contact you at work or by mail.
							We will not ask you the reason for your request.
						</p>
						<p>
							Your request must be in writing. In your request, you must tell us
							how or where you wish to be contacted. Request forms are available
							from and must be submitted to the Contact Office. We will make
							reasonable efforts to accommodate your request.
						</p>
						<p style={{ fontWeight: "600" }}>
							Right to a Paper Copy of This Notice
						</p>
						<p>
							You have the right to a paper copy of this Notice. You may ask us
							to give you a copy of this Notice at any time. Even if you have
							agreed to receive this Notice electronically, you are still
							entitled to a paper copy of this Notice. You may also obtain a
							paper copy of this Notice from the Contact Office.
						</p>
						<p style={{ fontWeight: "600" }}>
							Right to Choose Someone to Act for You
						</p>
						<p>
							If you have given someone medical power of attorney or if you have
							a legal guardian, that person can exercise your rights described
							in this Notice and make choices about your PHI. We will verify
							that the person has this authority and can act for you before we
							take any action.
						</p>
						<p style={{ fontWeight: "600" }}>Complaints</p>
						<p>
							If you believe your privacy rights have been violated, you may
							file a complaint with us, or with the Secretary of the Department
							of Health and Human Services. To file a complaint with us, send a
							written complaint to the Contact Office. We will not retaliate
							against you for filing a complaint, and you will not be penalized
							in any other way for filing a complaint.
						</p>
						<p style={{ fontWeight: "600" }}>Contact Office</p>
						<address
							style={{
								fontSize: "clamp(1.125rem, 1vw + 1rem, 1.25rem)",
								marginBottom: "20px",
								lineHeight: "1.4",
							}}
						>
							<strong style={{ fontWeight: "500" }}>Privacy Office</strong>
							<br />
							564 Niagara St
							<br />
							Building #2
							<br />
							Buffalo, NY 14201
						</address>

						<p>
							<span style={{ fontStyle: "italic" }}>Effective Date: </span>
							October 20, 2023
						</p>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
