import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Header from "../components/header/header";
import Image from "next/image";
import Hero from "../components/hero/hero";
import OrangeBox from "../components/orangeBox/orangeBox";
import Slidecordion from "../components/slidecordion/slidecordion";
import ColumnAccordion from "../components/columnAccordion/columnAccordion";
import Stats from "../components/stats/stats";
import Video from "../components/video/video";
import CTA from "../components/cta/cta";
import Masonry from "../components/masonry/masonry";
import Footer from "../components/footer/footer";

export default function Home() {

  // Define current page
  const currentPage = "home";

  // SEO
  const title = "CINQCARE - Care, Where You Live";
  const metaDescription = "CINQCARE delivers health and care—better, simpler, and closer to home. Because your health shouldn’t depend on your zip code.";
  const pageURL = "https://cinq.care/";

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
        <Slidecordion page={currentPage} />
        <ColumnAccordion page={currentPage} />
        <Stats page={currentPage} />
        
        <Video page={currentPage} />
        <div className="separator"></div>
        <Masonry page={currentPage} />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
