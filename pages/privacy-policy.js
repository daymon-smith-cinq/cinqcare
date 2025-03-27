import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";

export default function PrivacyPolicy() {

  // Define current page
  const currentPage = "privacy-policy";

  // SEO
  const title = "Privacy Policy | CINQCARE";
  const metaDescription = "CINQCARE’s Privacy Policy details how we collect, use, disclose, and protect your personal information securely.";
  const pageURL = "https://cinq.care/privacy-policy";

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
