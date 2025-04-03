import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";

export default function PrivacyPolicy() {
	// Define current page
	const currentPage = "privacy-policy-grace-at-home";

	// SEO
	const title = "Privacy Policy - Grace At Home | CINQCARE";
	const metaDescription =
		"CINQCARE’s Privacy Policy details how we collect, use, disclose, and protect your personal information securely.";
	const pageURL = "https://cinq.care/privacy-policy-grace-at-home";

	return (
		<>
			<Head>
				<meta name="description" content={metaDescription} />
				<meta property="og:image" content={OpengraphImg.src} />
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
						<h1>We understand the importance of protecting your privacy.</h1>

						<p>
							GRACE AT HOME expects its employees, vendors, partners, patients
							and clients to comply with all applicable laws and regulations.
							For questions related to the following information, please e-mail
							info@Grace-At-Home.com.
						</p>

						<h2>DISCLAIMER STATEMENT</h2>
						<p>
							Please remember that medical information provided by GRACE AT
							HOME, in the absence of a visit with a health care professional,
							must be considered as an educational service only. The information
							sent through e-mail should not be relied upon as a medical
							consultation. This mechanism is not designed to replace a
							qualified medical professional’s independent judgment about the
							appropriateness or risks of care for a given patient. We will do
							our best to provide you with information that will help you make
							your own health care decisions.
						</p>

						<h2>PRIVACY POLICY</h2>
						<p>
							This statement discloses the information practices for
							Grace-At-Home.com, including what type of information is gathered
							and tracked, how the information is used and with whom the
							information is shared.
						</p>

						<h3>Registration</h3>
						<p>
							In order to access certain areas of this Web site (contact form,
							e-newsletters, white papers and case studies, client portal), it
							may be required that you first complete a registration form.
							During registration you may be asked to provide contact
							information (such as name and e-mail address). We use this
							information to contact you about services in which you have
							expressed interest.
						</p>
						<p>
							GRACE AT HOME is the sole owner of the information collected on
							Grace-At-Home.com. GRACE AT HOME collects personally identifiable
							information from our users at several different points on our Web
							site.
						</p>

						<h3>e-Mail Marketing</h3>
						<p>
							If you wish to subscribe to our e-newsletter or other e-mail
							correspondence, we will use your name and e-mail address to send
							the e-mail correspondence to you. Out of respect for your privacy,
							we provide you a way to unsubscribe. Please see the “Choice and
							Opt-out” section.
						</p>

						<h3>Service-Related Announcements</h3>
						<p>
							We will send you strictly service-related announcements on rare
							occasions when it is necessary to do so. Generally, you may not
							opt-out of these communications, which are not promotional in
							nature.
						</p>

						<h3>Customer Service/Patient Communication</h3>
						<p>
							Based upon the personally identifiable information you provide us,
							we may send you a welcoming e-mail to verify your username and
							password. We may also communicate with you in response to your
							inquiries, to provide the services you request, and to manage your
							account. We may contact you for client satisfaction surveys,
							market research or in connection with certain transactions. We may
							communicate with you by e-mail or telephone, in accordance with
							your wishes.
						</p>

						<h3>Children’s Privacy</h3>
						<p>
							GRACE AT HOME is committed to protecting the privacy needs of
							children and we encourage parents and guardians to take an active
							role in their children’s online activities and interests. GRACE AT
							HOME does not knowingly collect information from children under
							the age of 13 and GRACE AT HOME does not target its Web site to
							children under 13.
						</p>

						<h3>Cookies</h3>
						<p>
							We store information that we collect through cookies, log files,
							clear gifs, and/or third party sources to create a “profile” of
							your preferences. We tie your personally identifiable information
							and your visit history, to information in the profile, in order to
							provide tailored promotions and marketing offers and to improve
							the content of the site for you. We do not share your profile with
							other third parties. We share your profile in aggregate form only.
						</p>
						<p>
							We sometimes collect non-identifiable information from visits to
							our Web site to help us provide better client service. For
							example, we keep track of the domains from which people visit and
							we also measure visitor activity on this Web site, but we do so in
							ways that keep the information non-identifiable. This information
							is sometimes known as “clickstream data.” GRACE AT HOME or others
							on GRACE AT HOME’s behalf may use this data to analyze trends and
							statistics and to help us provide better client service.
						</p>
						<p>
							Also, when we collect personal data from you in a transaction, we
							may extract some information about that transaction in a
							non-identifiable format and combine it with other non-identifiable
							information. This information is used and analyzed only at an
							aggregate level to help us understand trends and patterns. This
							information is not reviewed at an individual level. If you do not
							want your transaction details used in this manner you can disable
							your cookies.
						</p>

						<h3>Choice/Opt-out</h3>
						<p>
							We provide you the opportunity to ‘opt-out’ of having your
							personally identifiable information used for certain purposes when
							we ask for this information. For example, if you inquire about a
							service but do not wish to receive any additional marketing
							material from us, you can indicate your preference on our inquiry
							form.
						</p>
						<p>
							If you no longer wish to receive our newsletter and promotional
							communications, you may opt-out of receiving them by following the
							instructions included in each e-newsletter or communication or by
							e-mailing us at{" "}
							<a
								href="mailto:info@Grace-At-Home.com"
								title="Write an email to info@Grace-At-Home.com"
							>
								info@Grace-At-Home.com
							</a>
							.
						</p>
						<p>
							You will be notified when your personal information is collected
							by any third party that is not our agent/service provider, so you
							can make an informed choice as to whether or not to share your
							information with that party.
						</p>

						<h3>Access to Personally Identifiable Information</h3>
						<p>
							The security of your personal information is important to us. When
							you enter sensitive information on our registration forms, we
							encrypt that information using secure socket layer technology
							(SSL).
						</p>
						<p>
							We follow generally accepted industry standards to protect the
							personal information submitted to us, both during transmission and
							once we receive it. No method of transmission over the Internet,
							or method of electronic storage, is 100% secure, however.
							Therefore, while we strive to use commercially acceptable means to
							protect your personal information, we cannot guarantee its
							absolute security.
						</p>

						<h3>Business Transitions</h3>
						<p>
							In the event GRACE AT HOME goes through a business transition,
							such as a merger, acquisition by another company, or sale of all
							or a portion of its assets, your personally identifiable
							information will likely be among the assets transferred. You will
							be notified via e-mail of any such change in ownership or control
							of your personal information.
						</p>

						<h3>Changes to this Privacy Statement</h3>
						<p>
							If we decide to change our privacy policy, we will post those
							changes to this privacy statement, the home page, or other places
							we deem appropriate so that you are aware of what information we
							collect, how we use it, and under what circumstances, if any, we
							disclose it.
						</p>
						<p>
							We reserve the right to modify this privacy statement at any time,
							so please review it frequently. If we make material changes to
							this policy, we will notify you here, by e-mail, or by means of a
							notice on our home page.
						</p>

						<h3>Contact Us</h3>
						<p>
							If you have any questions or suggestions regarding our privacy
							policy, please contact us at:
						</p>
						<address
							style={{
								fontSize: "clamp(1.125rem, 1vw + 1rem, 1.25rem)",
								marginBottom: "20px",
								lineHeight: "1.4",
							}}
						>
							<strong>GRACE AT HOME</strong>
							<br />
							<strong>ATTN: Internet Privacy Manager</strong>
							<br />
							PO Box 503108
							<br />
							Indianapolis, IN 46250
							<br />
							<strong>TELEPHONE</strong>
							<br />
							317.429.0120
							<br />
							<strong>FAX</strong>
							<br />
							317.800.7730
						</address>

						<h2>TERMS OF USE POLICY</h2>
						<p>
							ATTENTION: PLEASE READ THESE TERMS CAREFULLY BEFORE USING THIS WEB
							SITE. USING THIS WEB SITE INDICATES THAT YOU ACCEPT THESE TERMS.
							IF YOU DO NOT ACCEPT THESE TERMS (“TERMS”), DO NOT USE THIS WEB
							SITE.
						</p>
						<p>
							The following are terms of a legal agreement between you and GRACE
							AT HOME. By accessing, browsing and/or using this Web site, you
							acknowledge that you have read, understood, and agree, to be bound
							by these terms and to comply with all applicable laws and
							regulations, including export and re-export control laws and
							regulations. If you do not agree to these terms, do not use this
							web site.
						</p>
						<p>
							This Web site may contain other proprietary notices and copyright
							information, the terms of which must be observed and followed.
							Information on this Web site may contain technical inaccuracies or
							typographical errors.
						</p>
						<p>
							Information may be changed or updated without notice. GRACE AT
							HOME may also make improvements and/or changes in the products
							and/or the programs described in this information at any time
							without notice.
						</p>
						<p>
							GRACE AT HOME assumes no responsibility regarding the accuracy of
							the information that is provided by GRACE AT HOME and use of such
							information is at the recipient’s own risk. GRACE AT HOME provides
							no assurances that any reported problems may be resolved with the
							use of any information that GRACE AT HOME provides. By furnishing
							information, GRACE AT HOME does not grant any licenses to any
							copyrights, patents or any other intellectual property rights.
						</p>
						<p>
							GRACE AT HOME does not want to receive confidential or proprietary
							information from you through our Web site. Please note that any
							information or material sent to GRACE AT HOME will be deemed NOT
							to be confidential. By sending GRACE AT HOME any information or
							material, you grant GRACE AT HOME an unrestricted, irrevocable
							license to use, reproduce, display, perform, modify, transmit and
							distribute those materials or information, and you also agree that
							GRACE AT HOME is free to use any ideas, concepts, know-how or
							techniques that you send us for any purpose. However, we will not
							release your name or otherwise publicize the fact that you
							submitted materials or other information to us unless: (a) we
							obtain your permission to use your name; or (b) we first notify
							you that the materials or other information you submit to a
							particular part of this site will be published or otherwise used
							with your name on it; or (c) we are required to do so by law.
						</p>

						<h3>Limitation of Liability</h3>
						<p>
							GRACE AT HOME makes no representations whatsoever about any other
							Web site which you may access through this one. When you access a
							non-GRACE AT HOME Web site, even one that may contain the GRACE AT
							HOME logo, please understand that it is independent from GRACE AT
							HOME, and that GRACE AT HOME has no control over the content on
							that Web site. In addition, a link to a non-GRACE AT HOME Web site
							does not mean that GRACE AT HOME endorses or accepts any
							responsibility for the content, or the use, of such Web site. It
							is up to you to take precautions to ensure that whatever you
							select for your use is free of such items as viruses, worms,
							trojan horses and other items of a destructive nature.
						</p>
						<p>
							IN NO EVENT WILL GRACE AT HOME BE LIABLE TO ANY PARTY FOR ANY
							DIRECT, INDIRECT, SPECIAL OR OTHER CONSEQUENTIAL DAMAGES FOR ANY
							USE OF THIS WEB SITE, OR ON ANY OTHER HYPERLINKED WEB SITE,
							INCLUDING, WITHOUT LIMITATION, ANY LOST PROFITS, BUSINESS
							INTERRUPTION, LOSS OF PROGRAMS OR OTHER DATA ON YOUR INFORMATION
							HANDLING SYSTEM OR OTHERWISE, EVEN IF WE ARE EXPRESSLY ADVISED OF
							THE POSSIBILITY OF SUCH DAMAGES.
						</p>
						<p>
							ALL INFORMATION IS PROVIDED BY GRACE AT HOME ON AN “AS IS” BASIS
							ONLY. GRACE AT HOME PROVIDES NO REPRESENTATIONS AND WARRANTIES,
							EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF FITNESS
							FOR A PARTICULAR PURPOSE, MERCHANTABILITY AND NONINFRINGEMENT.
						</p>
						<p>
							GRACE AT HOME may at any time revise these terms by updating this
							posting. By using this web site, you agree to be bound by any such
							revisions and should therefore periodically visit this page to
							determine the current terms to which you are bound.
						</p>

						<h2>COPYRIGHT / TRADEMARK NOTIFICATIONS</h2>
						<p>
							Those trademarks followed by ® are registered trademarks of GRACE
							AT HOME in the United States; all others are trademarks or common
							law marks of GRACE AT HOME in the United States: GRACE AT HOME ®
							(pending)
						</p>

						<h3>
							Fair use guidelines for use and reference of GRACE AT HOME
							trademarks
						</h3>
						<p>
							GRACE AT HOME “trademarks” include the logo and other designs
							owned and used by GRACE AT HOME (collectively referred to herein
							as “logos”), as well as GRACE AT HOME product and service names
							(collectively referred to herein as “product names”). GRACE AT
							HOME takes great care in the development and protection of its
							trademarks and reserves all rights of ownership of its trademarks.
						</p>

						<h3>Use of GRACE AT HOME logos</h3>
						<p>
							GRACE AT HOME carefully limits the use of its logos. No other
							company may use GRACE AT HOME logos unless it has the express
							written permission of GRACE AT HOME, or is licensed by GRACE AT
							HOME to do so. To obtain permission to use any GRACE AT HOME logo,
							e-mail{" "}
							<a
								href="mailto:info@Grace-At-Home.com"
								title="Write an email to info@Grace-At-Home.com"
							>
								info@Grace-At-Home.com
							</a>
							.
						</p>

						<h3>Fair use of GRACE AT HOME product names</h3>
						<p>
							“Fair use” of trademarks allow third parties to make reference
							(text ONLY) to GRACE AT HOME product names. While fair use allows
							use of or reference to GRACE AT HOME product names, it is
							necessary that the usage be truthful, not disparaging to GRACE AT
							HOME, and does not mislead the public. You must be clear and
							accurate as to the nature of the relationship between GRACE AT
							HOME and your company, its products or services.
						</p>

						<h3>Incorrect use of GRACE AT HOME trademarks</h3>
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
							<li>Do not alter the approved GRACE AT HOME trademark</li>
							<li>
								Do not create any new logo for GRACE AT HOME or GRACE AT HOME
								product or service names
							</li>
							<li>
								Do not incorporate any GRACE AT HOME product or service names
								into your company’s product names
							</li>
							<li>
								Do not incorporate any GRACE AT HOME product or service names
								into the root domain of any Web site owned by your company
							</li>
							<li>
								Do not misspell or use lower case letters when using the name
								GRACE AT HOME in text
							</li>
							<li>Do not use GRACE AT HOME taglines</li>
							<li>
								Do not connect your company name with GRACE AT HOME product or
								service names
							</li>
							<li>
								Do not use the GRACE AT HOME trademark name for a product or
								service as a noun, or in the plural form
							</li>
							<li>
								Do not misspell or incorrectly capitalize GRACE AT HOME
								trademarks
							</li>
						</ul>

						<h3>Linking to www.Grace-At-Home.com</h3>
						<p>
							Anyone linking to GRACE AT HOME’s Web site must comply with these
							Guidelines for Linking to GRACE AT HOME’s Web site. A site that
							links to GRACE AT HOME’s Web site:
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
							<li>May link to but not replicate GRACE AT HOME content</li>
							<li>
								Should not create a browser or border environment around GRACE
								AT HOME content
							</li>
							<li>
								Should not imply that GRACE AT HOME is endorsing it, its
								products or services
							</li>
							<li>
								Should not misrepresent its relationship with GRACE AT HOME
							</li>
							<li>
								Should not present false information about GRACE AT HOME
								products or services
							</li>
							<li>
								Should not use GRACE AT HOME logo without permission from GRACE
								AT HOME
							</li>
							<li>
								Should not contain content that could be construed as
								distasteful, offensive or controversial, and should contain only
								content that is appropriate for all age groups
							</li>
						</ul>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
