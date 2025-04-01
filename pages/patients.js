import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import ScrollJacking from "../components/scrollJacking/scrollJacking";
import scrollJackingImage from "/public/images/scrolljacking--patients.svg";
import IconBlocks from "../components/iconBlocks/iconBlocks";
import TestimonialSlider from "../components/testimonialSlider/testimonialSlider";
import Map from "../components/map/map";
import GlassAccordion from "../components/glassAccordion/glassAccordion";
import CTA from "../components/cta/cta";
import Accordion from "../components/accordion/accordion";
import Footer from "../components/footer/footer";

export default function Patients() {
	// Define current page
	const currentPage = "patients";

	// SEO
	const title = "For Patients | CINQCARE";
	const metaDescription =
		"CINQCARE provides trusted providers, community support, and tailored care services to improve your health where you live.";
	const pageURL = "https://cinq.care/patients";

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

        <ScrollJacking page={currentPage} bg={scrollJackingImage} bgPosition="end normal" bgWidth="70%">
          <div>
            <h2>What if <em>getting care</em> didn’t feel so hard?</h2>
          </div>
          <div>
            <h2>For too many people, healthcare feels <em>out of reach</em> — it can seem like no one is truly looking out for you.</h2>
          </div>
          <div>
            <h2>Long wait times, complicated paperwork, and a system that wasn’t built for real life make it difficult <em>to get the help you deserve.</em></h2>
          </div>
          <div>
            <h2>But it doesn’t have to be this way. At CINQCARE, we bring health and care together, meeting you where you are and <em>making it easier to get the support you need.</em></h2>
          </div>
        </ScrollJacking>
        <IconBlocks page={currentPage} />
        <Map page={currentPage} />
        <TestimonialSlider page={currentPage} />
        <GlassAccordion page={currentPage} />
        <CTA
          type="primary"
          buttonText="Find Support Near You"
          link="/join-our-family"
          target="_blank"
        >
          <header>
            <h2 class="period">Your health, <em>our commitment</em></h2>
          </header>
          <p>
						We don’t want you to have to navigate healthcare alone. See if we’re
						already working in your community to make things easier.
					</p>
        </CTA>
        <Accordion page={currentPage} />
      </main>

			<Footer />
		</>
	);
}
