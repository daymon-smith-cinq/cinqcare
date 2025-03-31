import styles from "./scrollJacking.module.scss";

const ScrollJacking = (props) => {
	return (
		<section className={styles.scrollJacking}>
			<section>
				<img src={props.bg.src} alt="Background" />
			</section>

			{props.children}
		</section>
	);
};

export default ScrollJacking;
