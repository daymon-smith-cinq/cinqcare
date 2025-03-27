import styles from "./cta.module.scss";
import Button from "../button/button";

const CTA = ( props ) => {
  return (
    <section 
      className={`
        ${ styles.cta__main } 
        ${ styles[ props.type ] } 
      `}
    >
      <div className={`${styles.wrapper} ${" wrapper"}`}>
        { props.children ?? undefined }
        
        { props.buttonText && (
          <Button 
            link={ props.link }
            text={ props.buttonText }
            type={ props.type == "primary" ? "secondary" : "primary" }
          />
        )}
      </div>
    </section>
  );
};

export default CTA;