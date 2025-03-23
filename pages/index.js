import Head from "next/head";
import Header from "../components/header/header";
import Image from "next/image";
import Hero from "../components/hero/hero";
import OrangeBox from "../components/orangeBox/orangeBox";
import CTA from "../components/cta/cta";
import Footer from "../components/footer/footer";

export default function Home() {

  // Define current page
  const currentPage = "home";

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Lorem ipsum dolor sit amet." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header headerBg="dark" />
      
      <main>
        <Hero page={currentPage} />
        <OrangeBox page={currentPage} />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
