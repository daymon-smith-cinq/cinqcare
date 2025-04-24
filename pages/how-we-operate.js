import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";

export default function HowWeOperate() {

  // Define current page
  const currentPage = "how-we-operate";

  // SEO
  const title = "How We Operate | CINQCARE";
  const metaDescription = ""; // NEED META DESCRIPTION
  const pageURL = "https://cinq.care/how-we-operate";
  const opengraphImg = "https://cinq.care/cinqcare-opengraph.jpg";

  return (
    <>
      <Head>
        <meta name="description" content={metaDescription} />
        <meta property="og:image" content={opengraphImg} />
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
