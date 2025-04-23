import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import StaticJack from "@/components/staticJack/staticJack";
import StaticJackFull from "@/components/staticJackFull/staticJackFull";
import IconBlocks from "../components/iconBlocks/iconBlocks";
import TestimonialSlider from "../components/testimonialSlider/testimonialSlider";
import Map from "../components/map/map";
import Video from "../components/video/video";
import GlassAccordion from "../components/glassAccordion/glassAccordion";
import LogoBar from "../components/logoBar/logoBar";
import CTA from "../components/cta/cta";
import Accordion from "../components/accordion/accordion";
import BackgroundContainer from "@/components/backgroundContainer/backgroundContainer";
import Footer from "../components/footer/footer";

export default function Providers() {
	// Define current page
	const currentPage = "providers";

	// SEO
	const title = "For Providers | CINQCARE";
	const metaDescription =
		"Join CINQCARE’s network to enhance community-based care with expert support, value-based incentives, and data-driven tools for providers.";
	const pageURL = "https://cinq.care/for-providers";

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
				<StaticJackFull page={currentPage} />
				<StaticJack page={currentPage} />
				<BackgroundContainer page={currentPage}>
					<IconBlocks page={currentPage} />
					<TestimonialSlider page={currentPage} />
				</BackgroundContainer>
				<Map page={currentPage} />
				<Video page={currentPage} />
				<GlassAccordion page={currentPage} />
				<LogoBar page={currentPage} />
				<CTA
					type="secondary"
					buttonText="Contact Us Today"
					link="/join-our-family"
					target="_blank"
				>
					<header>
						<h2 className="period">
							We want to hear <em>from you</em>
						</h2>
					</header>
					<p>
						Tell us about your community and your good work. If it’s your
						calling to deliver care where you live, we are ready to help.
					</p>
				</CTA>
				<Accordion page={currentPage} />
			</main>

			<Footer />
		</>
	);
}
