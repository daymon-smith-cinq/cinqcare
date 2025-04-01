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

      <Header headerBg="light" />

      <main className="gradient--top">
        <section page={currentPage}>
          <div className="wrapper">
            <h1>CINQCARE Privacy Policy</h1>

            <p>CINQCARE (“CINQCARE,” “we,” “our,” or “us”) provides this Privacy Policy to describe how we collect, use, and share the information of individuals who visit our website at https://cinq.care/ or any other websites that link to this Privacy Policy (the “Site”).  This Privacy Policy governs only information collected by the Site that is not Protected Health Information (“PHI”) (as defined by the Health Insurance Portability and Accountability Act of 1996 (“HIPAA”)).  For information about how we use and disclose PHI, please see our <a href="https://cinq.care/care-at-home-notice-of-privacy-practices/" title="Notice of HIPAA Privacy Practices">Notice of HIPAA Privacy Practices</a>.</p>

            <h2>Information Collection</h2>
            <p>
              When using our Site, you may voluntarily provide information about yourself, including your name, phone number, email address, insurance status, health condition, and any other information you choose to provide.  For example, we collect this information when you request an appointment, join our email list, contact us, or interact with us for any other purpose. 
            </p>
            <p>
              We (and other entities) automatically collect information relating to your interactions with us and our Site, including browser type, IP address, pages visited and other activities on the Site, device type, time and date of visit, and other information we collect through the use of cookies and similar technology.  See the <a href="#digital-advertising-and-analytics" title="Digital Advertising & Analytics">“Digital Advertising & Analytics”</a> section of this Privacy Policy to learn more about the use of this information and the choices available to you.
            </p>

            <h2>Information Collection</h2>
            <p>
              We may use your information for any lawful purpose, including the following:
            </p>
            <ul>
              <li>To schedule appointments;</li>
              <li>To respond to your inquiries, including questions about our services;</li>
              <li>To operate and improve our products and services;</li>
              <li>To operate, personalize, and improve the Site, including for analytics purposes;</li>
              <li>To send updates, promotions, and marketing materials that may be of interest to you;</li>
              <li>To comply with the law and to maintain the security of our Site; or</li>
              <li>With your consent, or as otherwise disclosed at the time information is collected.</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We may share the information we collect with other parties, including the following:
            </p>
            <ul>
              <li>With third-party service providers who process information on our behalf, such as data hosting services and email service providers;</li>
              <li>With any affiliates or joint venture partners that we may have in the future;</li>
              <li>Pursuant to a subpoena, court order, governmental inquiry, or other legal process or as otherwise required by law, to protect our rights or the rights of third parties, or to protect the safety or security of any person or entity;</li>
              <li>As part of a corporate sale, merger, or acquisition, or other transfer of all or part of our assets, including as part of a bankruptcy proceeding; or</li>
              <li>With your consent or as otherwise disclosed at the time of data collection or sharing.</li>
            </ul>
            <p>We may share information that has been de-identified or aggregated without limitation.</p>

            <h2 id="digital-advertising-and-analytics">Digital Advertising & Analytics</h2>
            <p>We may partner with ad networks and other ad serving providers (“Advertising Providers”) that serve ads on behalf of us and others on non-affiliated platforms.  Some of those ads may be personalized, meaning that they are intended to be relevant to you based on information Advertising Providers collect about your use of the Site and other sites or apps over time, including information about relationships among different browsers and devices.  This type of advertising is known as interest-based advertising.</p>
            <p>You may visit the DAA Webchoices tool at www.aboutads.info to learn more about this type of advertising and how to opt out of this advertising on websites by companies participating in the DAA self-regulatory program.  If you delete your cookies or use a different browser or mobile device, you may need to renew your opt-out choices exercised through the DAA Webchoices tool.  Note that electing to opt out will not stop advertising from appearing in your browser or applications.  It may make the ads you see less relevant to your interests.</p>
            <p>We may also work with third parties that collect data about your use of the Site and other sites or apps over time for non-advertising purposes.  CINQCARE uses Google Analytics and other third-party services to improve the performance of the Site and for analytics and marketing purposes.  For more information about how Google Analytics collects and uses data when you use our Site, visit <a href="https://www.google.com/policies/privacy/partners">www.google.com/policies/privacy/partners</a>, and to opt out of Google Analytics, visit <a href="https://tools.google.com/dlpage/gaoptout">tools.google.com/dlpage/gaoptout</a>.</p>
            <p>Additionally, your browser may offer tools to limit the use of cookies or to delete cookies; however, if you use these tools, our Site may not function as intended.</p>

            <h2>Third-Party Links and Tools</h2>
            <p>The Site may provide links to third-party websites or apps.  We do not control the privacy practices of those websites or apps, and they are not covered by this Privacy Policy.  You should review the privacy policies of other websites or apps that you use to learn about their data practices.</p>
            <p>The Site also includes integrated social media tools or “plug-ins,” such as social networking tools offered by third parties.  If you use these tools to share personal information or you otherwise interact with these features on the Site, those companies may collect information about you and may use and share such information in accordance with your account settings, including by sharing such information with the general public.</p>
            <p>Your interactions with third-party companies and your use of their features are governed by the privacy policies of the companies that provide those features.  We encourage you to carefully read the privacy policies of any accounts you create and use.</p>

            <h2>Your Choices</h2>
            <p>To opt out of our email marketing, you can use the link provided at the bottom of each marketing message.  If you opt out of our email marketing, we will still send you messages related to our services and relationship with you, such as appointment information.</p>
            <p>For choices with respect to third-party interest-based advertising activities, please see the <a href="#digital-advertising-and-analytics" title="Digital Advertising & Analytics">“Digital Advertising & Analytics”</a> section above.</p>

            <h2>Changes to Our Privacy Policy</h2>
            <p>If our information practices change, we will post these changes on this page.  We encourage you to visit this page periodically to learn of any updates.</p>

            <h2>Contact</h2>
            <p>If you have questions, comments, or concerns about this Privacy Policy, please contact us at:</p>
            <address>
              <strong>CINQCARE</strong><br />
              <strong>Privacy Office</strong><br />
              2300 N St NW<br />
              Suite 200<br />
              Washington, D.C. 20037
            </address>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
