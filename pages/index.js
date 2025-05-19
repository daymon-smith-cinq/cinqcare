import Head from "next/head";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import OrangeBox from "../components/orangeBox/orangeBox";
import Slidecordion from "../components/slidecordion/slidecordion";
import ColumnAccordionRevised from "../components/columnAccordionRevised/columnAccordionRevised";
import Stats from "../components/stats/stats";
import SideBySide from "../components/sideBySide/sideBySide";
import Video from "../components/video/video";
import CTA from "../components/cta/cta";
import MasonryCommunities from "../components/masonry/masonry-communities";
import Footer from "../components/footer/footer";
import Spacer from "../components/spacer/spacer";

export default function Home() {
	// Define current page
	const currentPage = "home";

	// SEO
	const title = "CINQCARE - Care, Where You Live";
	const metaDescription =
		"CINQCARE delivers health and care—better, simpler, and closer to home. Because your health shouldn’t depend on your zip code.";
	const pageURL = "https://cinq.care/";
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

			<!-- Google Tag Manager -->
				<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-PXSVWVJS');</script>
			<!-- End Google Tag Manager -->
			</Head>

			<Header headerBg="dark" />

			<main>
				<Hero page={currentPage} />
				<OrangeBox page={currentPage} />
				<Slidecordion page={currentPage} />
				<ColumnAccordionRevised page={currentPage} />
				<Stats page={currentPage} />
				<SideBySide page={currentPage} />
				<Video page={currentPage} />
				<Spacer separator="true" size="small" />
				<MasonryCommunities />
				<Spacer size="medium" />
				<CTA
					type="primary"
					buttonText="Connect with Us"
					link="/join-our-family"
				>
					<header>
						<h2>
							Join the <em>CINQCARE</em> Family.
						</h2>
					</header>
					<p>
						We’d love to explore opportunities for providers, Family Members,
						and partners in your area.
					</p>
				</CTA>
			</main>

			<Footer />
		</>
	);
}
