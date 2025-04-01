import styles from "./scrollJacking.module.scss";

const ScrollJacking = ( props ) => {
  return (
    <section className={ styles.scrollJacking }>
        <section style={{ '--bg-position': props.bgPosition, '--max-width': props.bgWidth }}>
          <img src={ props.bg.src } alt="Background" />
        </section>
        
        { props.children }
    </section>
  );
};

export default ScrollJacking;