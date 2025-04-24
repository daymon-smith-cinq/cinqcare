import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import JobBoard from "@/components/jobBoard/jobBoard";
import Footer from "../components/footer/footer";

export default function Careers() {
	// Define current page
	const currentPage = "careers";

	// SEO
	const title = "Careers | CINQCARE";
	const metaDescription =
		"Join CINQCARE’s mission to deliver health and care to high-needs communities. Answer the call to make a difference—explore careers today.";
	const pageURL = "https://cinq.care/careers-with-a-calling";
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

			<Header headerBg="dark" />

			<main>
				<Hero page={currentPage} />
				<JobBoard />
			</main>

			<Footer />
		</>
	);
}
