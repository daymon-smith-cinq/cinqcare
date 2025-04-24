import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/header";
import HeroAlt from "../components/heroAlt/heroAlt";
import Cards from "../components/cards/cards";
import IconBlocks from "../components/iconBlocks/iconBlocks";
import People from "../components/people/people";
import TestimonialSlider from "../components/testimonialSlider/testimonialSlider";
import CTA from "../components/cta/cta";
import Accordion from "../components/accordion/accordion";
import Footer from "../components/footer/footer";
import logoCareMedical from "/public/logo-care-medical-practice.svg";

export default function CareMedicalPractice() {
	// Define current page
	const currentPage = "care-medical-practice";

	// SEO
	const title = "Care Medical Practice | CINQCARE";
	const metaDescription =
		"Care Medical Practice offers primary, specialty, and mental health care in your community. Find expert, compassionate care near you.";
	const pageURL = "https://cinq.care/care-medical-practice";
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

			<main>
				<HeroAlt page={currentPage} />

				<Cards page={currentPage} />

				<IconBlocks page={currentPage} />

				<People page={currentPage} />

				<CTA type="tertiary" buttonText="Learn More" link="/join-our-family">
					<Image
						priority={false}
						src={logoCareMedical}
						alt="Care Medical Practice logo"
						width="154"
						height="65"
					/>
					<header>
						<h3>
							Ready to see if <br />
							<em>Care Medical Practice</em> <br />
							is right for you?
						</h3>
					</header>
				</CTA>

				<TestimonialSlider page={currentPage} />

				<CTA
					type="primary"
					buttonText="Find a Care Medical Practice Near You"
					link="/join-our-family"
				>
					<header>
						<h2>
							Take the <em>first step</em> toward better care.
						</h2>
					</header>
				</CTA>

				<Accordion page={currentPage} />
			</main>

			<Footer />
		</>
	);
}
