import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";
import Map from "../components/map/map";

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

        <Map page={currentPage} />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
