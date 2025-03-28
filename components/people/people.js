import styles from "./people.module.scss";
import Image from "next/image";

import TonyW from "/public/portraits/tony-welters.jpg";
import BillH from "/public/portraits/bill-hagan.jpg";
import DeniseC from "/public/portraits/denise-christian.jpg";
import ErnieM from "/public/portraits/ernie-monfiletto.jpg";
import KristyD from "/public/portraits/kristy-duffey.jpg";
import JessicaG from "/public/portraits/jessica-gamzon.jpg";
import BrianB from "/public/portraits/brian-benjamin.jpg";
import RitaJM from "/public/portraits/rita-johnson-mills.jpg";
import RodneyA from "/public/portraits/rodney-armstead.jpg";
import NatalieL from "/public/portraits/natalie-o-ludaway.jpg";
import SteveS from "/public/portraits/steve-swift.jpg";
import BarbaraR from "/public/portraits/barbara-rhoden.jpg";
import CharylRW from "/public/portraits/cheryl-rucker-whitaker.jpg";

import GlenisS from "/public/portraits/glenis-strachan.jpg";
import JesslynP from "/public/portraits/jesslyn-perry.jpg";
import KellyM from "/public/portraits/kelly-mclean.jpg";
import GaryC from "/public/portraits/gary-carpenter.jpg";
import PamelaB from "/public/portraits/pamela-burton.jpg";
import StevenL from "/public/portraits/steven-liverpool.jpg";

const People = ({ page }) => {

	// *******
	// Content
	// *******

	// Alllll the options
	let content = {
		heading: "",
		headingPeriod: false,
		subheading: "",
		centeredHeading: false,
		bgGradient: false,
		people: [
			{
				portrait: "",
				name: "",
				title: "",
				info: "",
				quote: "",
			},
		],
	};

	// About
	if (page == "about") {
		content = {
			heading: "<a name='leadership'></a><em>Leadership</em>",
			headingPeriod: false,
			centeredHeading: true,
			bgGradient: true,
			people: [
				{
					portrait: TonyW,
					name: "Tony Welters",
					title: "Founder & CEO",
				},
				{
					portrait: BillH,
					name: "Bill Hagan",
					title: "Senior Advisor",
				},
				{
					portrait: DeniseC,
					name: "Denise Christian, MD",
					title: "Chief Medical Officer",
				},
				{
					portrait: ErnieM,
					name: "Ernie Monfiletto",
					title: "Senior Advisor",
				},
				{
					portrait: KristyD,
					name: "Kristy Duffey",
					title: "Chief Clinical Operations Officer",
				},
				{
					portrait: JessicaG,
					name: "Jessica Gamzon",
					title: "President Network Solutions",
				},
				{
					portrait: BrianB,
					name: "Brian Benjamin",
					title: "President Northeast",
				},
				{
					portrait: RitaJM,
					name: "Rita Johnson Mills",
					title: "Head of Special Accounts Relationships",
				},
				{
					portrait: RodneyA,
					name: "Rodney Armstead",
					title: "Senior Advisor",
				},
				{
					portrait: NatalieL,
					name: "Natalie O. Ludaway",
					title: "Chief Legal & External Affairs Officer",
				},
				{
					portrait: SteveS,
					name: "Steve Swift",
					title: "Chief Financial Officer",
				},
				{
					portrait: BarbaraR,
					name: "Barbara Rhoden",
					title: "Chief Brand and Marketing Officer",
				},
				{
					portrait: CharylRW,
					name: "Cheryl Rucker Whitaker",
					title: "President, Central and Southeast Regions",
				},
			],
		};
	}

	// Care Medical Practice
	if (page == "care-medical-practice") {
		content = {
			heading: "Meet Our Providers",
			headingPeriod: false,
			subheading: "<p>Your health starts with a trusted provider who understands your needs.</p>",
			centeredHeading: false,
			people: [
				{
					portrait: GlenisS,
					name: "Glenis Strachan, MD",
					info: "Years of experience, languages spoken",
					quote: "“A short personal statement”",
				},
				{
					portrait: JesslynP,
					name: "Jesslyn Perry, MD",
					info: "Years of experience, languages spoken",
					quote: "“A short personal statement”",
				},
				{
					portrait: KellyM,
					name: "Kelly Mclean, FNP-C",
					info: "Years of experience, languages spoken",
					quote: "“A short personal statement”",
				},
				{
					portrait: GaryC,
					name: "Gary Carpenter, MD",
					info: "Years of experience, languages spoken",
					quote: "“A short personal statement”",
				},
				{
					portrait: PamelaB,
					name: "Pamela Burton RPA-C",
					info: "Years of experience, languages spoken",
					quote: "“A short personal statement”",
				},
				{
					portrait: StevenL,
					name: "Steven Liverpool, MD",
					info: "Years of experience, languages spoken",
					quote: "“A short personal statement”",
				},
			],
		};
	}

	return (
		<section className={`${styles.section_people} ${content.bgGradient ? (`${styles.gradient}`) : undefined}`}>
			<div className={`${styles.container_people} ${" wrapper"}`}>
				<div className={`${styles.headingContainer} ${content.centeredHeading ? (`${styles.centered}`) : undefined}`}>
					{content?.heading && (
						<h3
							className={`${styles.heading} ${content.headingPeriod ? ("period") : undefined}`}
							dangerouslySetInnerHTML={{ __html: content.heading }}
						></h3>
					)}
					{content?.subheading && (
						<div
							className={styles.subheading}
							dangerouslySetInnerHTML={{ __html: content.subheading }}
						></div>
					)}
				</div>
				<div className={styles.peopleContainer}>
					{content.people &&
					content.people.map((person, peopleIndex) => (
						<div 
							key={peopleIndex}
							className={styles.person}
						>
							{person?.portrait && (
								<div className={styles.portrait}>
									<Image 
										priority={false} 
										src={person.portrait} 
										alt={`${"A professional portrait of "} ${person.name}`}
										width="363"
										height="451"
									/>
								</div>
							)}
							<div className={styles.textContainer}>
								{person?.name && (
									<h4
										className={styles.name}
										dangerouslySetInnerHTML={{ __html: person.name }}
									></h4>
								)}
								{person?.title && (
									<p
										className={styles.title}
										dangerouslySetInnerHTML={{ __html: person.title }}
									></p>
								)}
								{person?.info && (
									<p
										className={styles.info}
										dangerouslySetInnerHTML={{ __html: person.info }}
									></p>
								)}
								{person?.quote && (
									<blockquote
										className={styles.quote}
										dangerouslySetInnerHTML={{ __html: person.quote }}
									></blockquote>
								)}
							</div>
						</div>
					))}	
				</div>
			</div>
		</section>
	);
};

export default People;
