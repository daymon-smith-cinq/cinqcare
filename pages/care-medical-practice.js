import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Image from "next/image";
import Header from "../components/header/header";
import HeroAlt from "../components/heroAlt/heroAlt";
import Cards from "../components/cards/cards";
import IconBlocks from "../components/iconBlocks/iconBlocks";
import People from "../components/people/people";
import TestimonialSlider from "../components/testimonialSlider/testimonialSlider";
import CTA from "../components/cta/cta";
import Footer from "../components/footer/footer";

export default function CareMedicalPractice() {

  // Define current page
  const currentPage = "care-medical-practice";

  // SEO
  const title = "Care Medical Practice | CINQCARE";
  const metaDescription = "Care Medical Practice offers primary, specialty, and mental health care in your community. Find expert, compassionate care near you.";
  const pageURL = "https://cinq.care/care-medical-practice";

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

        <Cards page={currentPage} />
        
        <IconBlocks page={currentPage} />
        
        <People page={currentPage} />
        
        <TestimonialSlider page={currentPage} />

        <CTA
          type="primary"
          buttonText="Book Care Now"
          link="/"
          target="_blank"
        >
          <header>
            <h2>Take the <em>first step</em><br />toward better care.</h2>
          </header>
        </CTA>
      </main>

      <Footer />
    </>
  );
}
