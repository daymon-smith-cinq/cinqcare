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

export default function ForMoms() {

  // Define current page
  const currentPage = "for-moms";

  // SEO
  const title = "CINQCARE for Moms | CINQCARE";
  const metaDescription = "CINQCARE for Moms offers pregnancy and postpartum care with dedicated support, from medical visits to social services, tailored for you.";
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

      <Header headerBg="dark" />

      <main>
        <HeroAlt page={currentPage} />
        <OrangeBox page={currentPage} />

        <SideBySide page={currentPage} num="first" />
        <GlassAccordion page={currentPage} />
        <TestimonialSlider page={currentPage} />
        <CTA
          type="secondary"
          buttonText="Contact Us Today"
          link="/"
          target="_blank"
        >
          <header>
            <h2 class="period">We want to hear <em>from you</em></h2>
          </header>
          <p>Tell us about your community and your good work. If it’s your calling to deliver care where you live, we are ready to help.</p>
        </CTA>
        <SideBySide page={currentPage} num="second" />
        <CTA
          type="secondary"
          buttonText="Contact Us Today"
          link="/"
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
