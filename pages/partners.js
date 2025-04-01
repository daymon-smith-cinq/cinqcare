import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import ScrollJacking from "../components/scrollJacking/scrollJacking";
import scrollJackingImage from "/public/images/scrolljacking--partners.svg";
import IconBlocks from "../components/iconBlocks/iconBlocks";
import TestimonialSlider from "../components/testimonialSlider/testimonialSlider";
import GlassAccordion from "../components/glassAccordion/glassAccordion";
import LogoBar from "../components/logoBar/logoBar";
import CTA from "../components/cta/cta";
import Footer from "../components/footer/footer";

export default function Partners() {
	// Define current page
	const currentPage = "partners";

	// SEO
	const title = "For Partners | CINQCARE";
	const metaDescription =
		"CINQCARE works with healthcare leaders to improve care delivery, enhance outcomes, and reduce costs in high-need communities using value-based solutions.";
	const pageURL = "https://cinq.care/partners";

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

			<Header headerBg="dark" />

			<main>
				<Hero page={currentPage} />

				<ScrollJacking page={currentPage}  bg={scrollJackingImage} bgPosition="end normal" bgWidth="100%">
					<div>
						<h2>
							What if we made delivering care a <em>little easier</em> for the
							providers who know their communities best?
						</h2>
					</div>
					<div>
						<h2>
							You're not just <em>treating symptoms</em> — you’re navigating a
							system that wasn’t built for high-needs, underserved populations.
						</h2>
					</div>
					<div>
						<h2>
							Administrative burdens grow, care models shift, and reimbursements
							remain unpredictable. <em>Yet, your commitment never wavers.</em>
						</h2>
					</div>
				</ScrollJacking>
				<IconBlocks page={currentPage} />
				<TestimonialSlider page={currentPage} />
				<GlassAccordion page={currentPage} />
				<LogoBar page={currentPage} />
				<CTA
					type="secondary"
					buttonText="Contact Us Today"
					link="/join-our-family"
					target=""
				>
					<header>
						<h2 class="period">
							The Future of Health and Care Starts <em>Here.</em>
						</h2>
					</header>
					<p>
						Partnering with CINQCARE helps lower costs, improve outcomes, and
						build healthier communities — together.
					</p>
				</CTA>
			</main>

			<Footer />
		</>
	);
}
