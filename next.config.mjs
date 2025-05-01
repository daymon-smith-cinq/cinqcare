/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	async redirects() {
		return [
			{
				source: "/care-at-home-notice-of-privacy-practices",
				destination: "/privacy-policy-practices",
				permanent: true,
			},
			{
				source: "/individuals",
				destination: "/patients",
				permanent: true,
			},
			{
				source: "/practices",
				destination: "/care-medical-practice",
				permanent: true,
			},
			{
				source: "/care-at-home",
				destination: "https://grace-at-home.care/",
				permanent: true,
			},
			{
				source: "/contact-cinqcare",
				destination: "/join-our-family",
				permanent: true,
			},
			// {
			// 	source: "/grace-at-home",
			// 	destination: "https://grace-at-home.care/",
			// 	permanent: true,
			// },
			{
				source: "/care-at-home-privacy-policy",
				destination: "/privacy-policy",
				permanent: true,
			},
			{
				source: "/aco/thankyou",
				destination: "/thank-you",
				permanent: true,
			},
			{
				source: "/thankyou",
				destination: "/thank-you",
				permanent: true,
			},
			{
				source: "/news",
				destination: "/",
				permanent: true,
			},
			{
				source: "/privacy-policy-2",
				destination: "/privacy-policy",
				permanent: true,
			},
			{
				source: "/contact-us",
				destination: "/join-our-family",
				permanent: true,
			},
			{
				source: "/refer-a-family-member",
				destination: "/join-our-family",
				permanent: true,
			},
			{
				source: "/care-at-home-annual-visit-program",
				destination: "https://grace-at-home.care/",
				permanent: true,
			},
			{
				source: "/care-where-you-live",
				destination: "https://grace-at-home.care/",
				permanent: true,
			},
			{
				source: "/care-at-home-notice-of-privacy-practices",
				destination: "/privacy-policy",
				permanent: true,
			},
			{
				source: "/care-at-home-new-page",
				destination: "https://grace-at-home.care/",
				permanent: true,
			},
			{
				source: "/care-at-home-annual-assessment-visit-program-form",
				destination: "https://grace-at-home.care/",
				permanent: true,
			},
			{
				source: "/concierge-care-at-home-form",
				destination: "https://grace-at-home.care/",
				permanent: true,
			},
			{
				source: "/leadership",
				destination: "/about",
				permanent: true,
			},
			{
				source: "/leadership",
				destination: "/",
				permanent: true,
			},
			{
				source: "/dr-jonathan-daniels",
				destination: "/",
				permanent: true,
			},
			{
				source: "/aco/spanish",
				destination: "/",
				permanent: true,
			},
			{
				source: "/aco/russian",
				destination: "/",
				permanent: true,
			},
			{
				source: "/aco/nepali",
				destination: "/",
				permanent: true,
			},
			{
				source: "/aco/haitiancreole",
				destination: "/",
				permanent: true,
			},
			{
				source: "/aco/mandarin",
				destination: "/",
				permanent: true,
			},
			{
				source: "/aco/arabic",
				destination: "/",
				permanent: true,
			},
			{
				source: "/aco/burmese",
				destination: "/",
				permanent: true,
			},
			{
				source: "/caribbean",
				destination: "/",
				permanent: true,
			},
			{
				source: "/faqs",
				destination: "/",
				permanent: true,
			},
			{
				source:
					"/cinqcare-partners-with-march-of-dimes-to-combat-maternity-care-deserts",
				destination: "/",
				permanent: true,
			},
			{
				source:
					"/cinqcare-appoints-vonetta-y-daniels-as-executive-director-for-georgia",
				destination: "/",
				permanent: true,
			},
			{
				source: "/cinqcare-teams-with-humana-to-provide-in-home-care",
				destination: "/",
				permanent: true,
			},
			{
				source: "/aco",
				destination: "/",
				permanent: true,
			},
			{
				source:
					"/cms-recognizes-cinqcare-and-doral-health-for-breast-cancer-screening-initiative",
				destination: "/",
				permanent: true,
			},
			{
				source:
					"/cinqcare-strengthens-leadership-team-with-key-appointments-kristy-duffey-and-julie-mascari-colned",
				destination: "/",
				permanent: true,
			},
			{
				source:
					"/cinqcare-strengthens-leadership-team-with-key-appointments-kristy-duffey-and-julie-mascari",
				destination: "/",
				permanent: true,
			},
			{
				source:
					"/cinqcare-sponsors-2024-fountain-city-classic-strengthening-dedication-to-black-communities",
				destination: "/",
				permanent: true,
			},
			{
				source: "/news",
				destination: "/",
				permanent: true,
			},
			{
				source: "/aco-about",
				destination: "/",
				permanent: true,
			},
			{
				source: "/aco/participant-providers",
				destination: "/",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
