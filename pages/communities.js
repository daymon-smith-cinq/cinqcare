import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";

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

        <CTA />
      </main>

      <Footer />
    </>
  );
}
