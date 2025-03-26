import Head from "next/head";
import Header from "../components/header/header";
import Image from "next/image";
import Hero from "../components/hero/hero";
import OrangeBox from "../components/orangeBox/orangeBox";
import Slidecordion from "../components/slidecordion/slidecordion";
import ColumnAccordion from "../components/columnAccordion/columnAccordion";
import Stats from "../components/stats/stats";
import CTA from "../components/cta/cta";
import Footer from "../components/footer/footer";

export default function Home() {

  // Define current page
  const currentPage = "home";

  // SEO
  const title = "Home"; // TEMP COPY
  const metaDescription = "Lorem ipsum dolor sit amet"; // TEMP COPY

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header headerBg="dark" />
      
      <main>
        <Hero page={currentPage} />
        <OrangeBox page={currentPage} />
        <Slidecordion page={currentPage} />
        <ColumnAccordion page={currentPage} />
        <Stats page={currentPage} />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
