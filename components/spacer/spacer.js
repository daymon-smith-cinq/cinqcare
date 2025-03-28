import styles from "./spacer.module.scss";

/**
 * 
 * @param { separator } true or false
 * @param { size } small (20px) or medium (40px) or large (100px)
 */

const Spacer = ( props ) => {
	return (
		<section 
			className={`
				${styles.section_spacer} 
				${props.size ? styles[ props.size ] : styles.medium }
			`}>
				{props?.separator && (
					<div className="separator"></div>
				)}
		</section>
	);
};

export default Spacer;
