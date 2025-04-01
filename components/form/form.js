import styles from "./form.module.scss";

const Form = ({ page }) => {
	let content = "";

	if (page === "join-our-family") {
		content = {
			heading: "Join <em>our family</em>",
			image: "images/FoodDelivery.jpg",
			paragraph:
				"Every day, we’re committed to your health and well-being—<em>because to us, you’re family.</em> <br> We’ll provide you with personalized care, ensuring you have access to medical, mental health, and community services.",
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
						allowTransparency="true"
						allowFullScreen
						src="https://form.jotform.com/250897973993078"
						style={{
							width: "100%",
							height: "700px", // adjust based on form length
							border: "none",
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default Form;
