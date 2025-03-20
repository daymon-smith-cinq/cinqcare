import styles from "./button.module.scss";

/**
 * 
 * @param { link } href attribute for the button
 * @param { target } target attribute for the button 
 * @param { type } primary, secondary, or tertiary
 * @param { size } small or large 
 * @param { text } button text 
 */
const Button = ( props ) => {
  return (
    <a 
      href={ props.link } 
      target={ props.target } 
      className={`
        ${ styles.button } 
        ${ props.type ? styles[ props.type ] : styles.primary } 
        ${ props.size ? styles[ props.size ] : '' }
      `}>
        { props.text }
    </a>
  );
}
export default Button;