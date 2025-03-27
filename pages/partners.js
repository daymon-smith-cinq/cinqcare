import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";

export default function Partners() {

  // Define current page
  const currentPage = "partners";

  // SEO
  const title = "For Partners | CINQCARE";
  const metaDescription = "CINQCARE works with healthcare leaders to improve care delivery, enhance outcomes, and reduce costs in high-need communities using value-based solutions.";
  const pageURL = "https://cinq.care/partners";

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

        <CTA />
      </main>

      <Footer />
    </>
  );
}
