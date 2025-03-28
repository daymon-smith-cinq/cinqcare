import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";
import People from "../components/people/people";

export default function About() {

  // Define current page
  const currentPage = "about";

  // SEO
  const title = "About Us | CINQCARE";
  const metaDescription = "Discover CINQCARE’s mission to deliver health and care where it’s needed most, driven by purpose and a commitment to communities.";
  const pageURL = "https://cinq.care/about";

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

        <People page={currentPage} />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
