import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import OrangeBox from "../components/orangeBox/orangeBox";
import Video from "../components/video/video";
import TestimonialSlider from "../components/testimonialSlider/testimonialSlider";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";
import MasonryText from "@/components/masonryText/masonryText";

export default function Communities() {

  // Define current page
  const currentPage = "communities";

  // SEO
  const title = "Communities | CINQCARE";
  const metaDescription = "CINQCARE supports high-need urban and rural communities with health, care, and well-being. Hear their stories and connect with us.";
  const pageURL = "https://cinq.care/communities";

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
        <OrangeBox page={currentPage} />
        <MasonryText page={currentPage} />
        <Video page={currentPage} vid={"alan"} />
        <TestimonialSlider page={currentPage} />
        <Video page={currentPage} vid={"buffalo"} />
        <CTA
          type="primary"
          buttonText="Connect with us"
          link="/join-our-family"
          target="_blank"
        >
          <header>
            <h2>Join the CINQCARE Family</h2>
          </header>
          <p>We’d love to meet your community and explore ways to work together.</p>
        </CTA>
      </main>

      <Footer />
    </>
  );
}
