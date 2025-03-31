import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Image from "next/image";
import Header from "../components/header/header";
import HeroAlt from "../components/heroAlt/heroAlt";
import OrangeBox from "../components/orangeBox/orangeBox";
import Map from "../components/map/map";
import SideBySide from "../components/sideBySide/sideBySide";
import IconBlocks from "../components/iconBlocks/iconBlocks";
import CTA from "../components/cta/cta";
import MasonryImages from "../components/masonryImages/masonryImages";
import Footer from "../components/footer/footer";

export default function GraceAtHome() {

  // Define current page
  const currentPage = "grace-at-home";

  // SEO
  const title = "Grace at Home | CINQCARE";
  const metaDescription = "Grace at Home brings expert primary, urgent, and chronic care to you. Quality health support tailored to your needs, right at home.";
  const pageURL = "https://cinq.care/grace-at-home";

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
        <Map page={currentPage} />
        <SideBySide page={currentPage} num="first" />
        <IconBlocks page={currentPage} />
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

        <MasonryImages page={currentPage} />

        <CTA
          type="primary"
          buttonText="Learn More"
          link="/"
          target="_blank"
        >
          <header>
            <h2> Ready to Get Started? </h2>
          </header>
          <p>Take the first step toward better care. Find support today.</p>
        </CTA>
      </main>

      <Footer />
    </>
  );
}
