import styles from "./form.module.scss";

const Form = ({ page }) => {
	let content = "";

	if (page === "join-our-family") {
		content = {
			heading: "Join <em>our family</em>",
			image: "images/ManWomanHugging.jpg",
			paragraph:
				"Every day, we’re committed to your health and well-being—<em>because to us, you’re family.</em> <br> We’ll provide you with personalized care, ensuring you have access to medical, mental health, and community services.",
			form: "https://form.jotform.com/250985428512159",
			height: "592px",
		};
	}

	if (page === "sms-opt-in") {
		content = {
			heading: "Sign up to recieve text messages",
			image: "",
			paragraph: "",
			form: "https://form.jotform.com/250985721672162",
			height: "1075px",
		};
	}

	return (
		<section className={styles.section_Form}>
			<div className={styles.container_Form}>
				<div className={styles.form_Content}>
					{content.heading && (
						<h1 dangerouslySetInnerHTML={{ __html: content.heading }} />
					)}
					{content.image && <img src={content.image} />}
					{content.paragraph && (
						<p dangerouslySetInnerHTML={{ __html: content.paragraph }} />
					)}
				</div>
				<div className={styles.form_Form}>
					<iframe
						title="CINQCARE Join Form"
						id="JotFormIFrame"
						allowFullScreen
						src={content.form}
						style={{
							width: "100%",
							height: content.height, // adjust based on form length
							// border: "none",
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default Form;
