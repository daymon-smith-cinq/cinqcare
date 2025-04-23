import styles from "./backgroundContainer.module.scss";

const BackgroundContainer = ({ page, children }) => {
	let content = "";

	/*
        Background shorthand used to combine gradients and images if necessary like so Probably best to use percentages for mobile reasons:

        linear-gradient(rgba(255, 0, 255, 0.8), rgba(255, 255, 0, 0.8)), url('/backgrounds/PathwayWithGradient.svg') center / cover no-repeat red
    
    */

	if (page === "home") {
		content = {
			margin: "0 auto",
			padding: "0",
			background:
				"url('/backgrounds/PathwayWithGradient.svg') center / cover no-repeat",
		};
	} else if (page === "about") {
		content = {
			margin: "0 auto",
			padding: "0",
			background:
				"linear-gradient(0deg, rgba(251,242,227,0) 0%, rgba(251,242,227,1) 100%)",
		};
	} else if (page === "join-our-family") {
		content = {
			margin: "",
			padding: "",
			background: "linear-gradient(#fdf9f1, #fff, #fdf9f1)",
		};
	} else if (page === "providers") {
		content = {
			pageName: "providers",
			margin: "",
			padding: "",
			background:
				"linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 90%, rgba(255,255,255,1) 90%), url(/backgrounds/PathwayNoGradient.svg) 120% 700px no-repeat",
			backgroundPos: "calc(100% + 250px) 400px",
			backgroundSize: "700px 100%",
		};
	}

	return (
		<section
			className={`${styles.section_BackgroundContainer} ${
				styles[content.pageName]
			}`}
			style={{
				margin: content.margin,
				padding: content.padding,
				background: content.background,
				backgroundSize: content.backgroundSize,
				backgroundPosition: content.backgroundPos,
			}}
		>
			{children}
		</section>
	);
};

export default BackgroundContainer;
