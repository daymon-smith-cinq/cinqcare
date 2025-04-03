import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Image from "next/image";
import Header from "../components/header/header";
import HeroAlt from "../components/heroAlt/heroAlt";
import OrangeBox from "../components/orangeBox/orangeBox";
import SideBySide from "../components/sideBySide/sideBySide";
import GlassAccordion from "../components/glassAccordion/glassAccordion";
import TestimonialSlider from "../components/testimonialSlider/testimonialSlider";
import CTA from "../components/cta/cta";
import Accordion from "../components/accordion/accordion";
import Footer from "../components/footer/footer";
import logoForMoms from "/public/logo-cinqcare-for-moms.svg";
import Cards from "@/components/cards/cards";

export default function ForMoms() {
	// Define current page
	const currentPage = "for-moms";

	// SEO
	const title = "CINQCARE for Moms | CINQCARE";
	const metaDescription =
		"CINQCARE for Moms offers pregnancy and postpartum care with dedicated support, from medical visits to social services, tailored for you.";
	const pageURL = "https://cinq.care/for-moms";

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

			<main>
				<HeroAlt page={currentPage} />
				<OrangeBox page={currentPage} />
				<Cards page={currentPage} />
				<SideBySide page={currentPage} num="first" />
				<GlassAccordion page={currentPage} />
				<TestimonialSlider page={currentPage} />
				<CTA
					type="tertiary"
					buttonText="Learn More"
					link="https://gracewomenscenter.cinq.care/"
					target="_blank"
				>
					<Image
						priority={false}
						src={logoForMoms}
						alt="CINQCARE for Moms logo"
						width="188"
						height="57"
					/>
					<header>
						<h3>
							Ready to see if <em>CINQCARE for Moms</em> is right for you?
						</h3>
					</header>
				</CTA>
				<SideBySide page={currentPage} num="second" />
				<CTA
					type="primary"
					buttonText="Find Support Today"
					link="https://gracewomenscenter.cinq.care/"
					target="_blank"
				>
					<header>
						<h2>
							We’re Here <em>for You</em>
						</h2>
					</header>
					<p>
						Whether you're pregnant, postpartum, or planning for the future,
						CINQCARE for Moms is here to help.
					</p>
				</CTA>
				<Accordion page={currentPage} />
				<SideBySide page={currentPage} num="third" />
			</main>

			<Footer />
		</>
	);
}
