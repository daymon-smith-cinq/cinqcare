import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/header";
import Form from "../components/form/form";
import HeroAlt from "../components/heroAlt/heroAlt";
import Footer from "../components/footer/footer";

export default function JoinOurFamily() {
	// Define current page
	const currentPage = "thank-you";

	// SEO
	const title = "Thank You | CINQCARE";
	const metaDescription =
		"Join CINQCARE’s mission to transform care and well-being. Connect with us today—take the first step to become part of our family.";
	const pageURL = "https://cinq.care/thank-you";
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
			</main>

			<Footer />
		</>
	);
}
