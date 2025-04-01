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
  const metaDescription = "CINQCARE provides trusted providers, community support, and tailored care services to improve your health where you live.";
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
            <h2>What if we made delivering care a <em>little easier</em> for the providers who know their communities best?</h2>
          </div>
          <div>
            <h2>You're not just <em>treating symptoms</em> — you’re navigating a system that wasn’t built for high-needs, underserved populations.</h2>
          </div>
          <div>
            <h2>Administrative burdens grow, care models shift, and reimbursements remain unpredictable. <em>Yet, your commitment never wavers.</em></h2>
          </div>
        </ScrollJacking>
        <IconBlocks page={currentPage} />
        <Map page={currentPage} />
        <TestimonialSlider page={currentPage} />
        <GlassAccordion page={currentPage} />
        <CTA
          type="primary"
          buttonText="Contact Us Today"
          link="/join-our-family"
          target="_blank"
        >
          <header>
            <h2 class="period">We want to hear <em>from you</em></h2>
          </header>
          <p>Tell us about your community and your good work. If it’s your calling to deliver care where you live, we are ready to help.</p>
        </CTA>
        <Accordion page={currentPage} />
      </main>

      <Footer />
    </>
  );
}
