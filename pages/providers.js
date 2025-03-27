import Head from "next/head";
import OpengraphImg from "../public/cinqcare-opengraph.jpg";
import Image from "next/image";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import ScrollJacking from "../components/scrollJacking/scrollJacking";
import circle from "/public/circle.svg";
import Video from "../components/video/video";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";

export default function Providers() {

  // Define current page
  const currentPage = "providers";

  // SEO
  const title = "For Providers | CINQCARE";
  const metaDescription = "Join CINQCARE’s network to enhance community-based care with expert support, value-based incentives, and data-driven tools for providers.";
  const pageURL = "https://cinq.care/providers";

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
        
        <ScrollJacking page={currentPage} bg={circle}>
          <div>
            <h2>What if we made delivering care a <em>little easier</em> for the providers who know their communities best?</h2>
          </div>
          <div>
            <h2>You're not just <em>treating symptoms</em> — you’re navigating a system that wasn’t built for high-needs, underserved populations.</h2>
          </div>
          <div>
            <h2>Administrative burdens grow, care models shift, and reimbursements remain unpredictable. <em>Yet, your commitment never wavers.</em></h2>
          </div>
        </ScrollJacking>

        <Video page={currentPage} />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
