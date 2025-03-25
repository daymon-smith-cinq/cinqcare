import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";

export default function Providers() {

  // Define current page
  const currentPage = "providers";


  // SEO
  const title = "Providers"; // TEMP COPY
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

        <CTA />
      </main>

      <Footer />
    </>
  );
}
