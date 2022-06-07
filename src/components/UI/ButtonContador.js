import styles from "./ButtonContador.module.css";

const ButtonContador = (props) => {
  return (
    <button className={styles.button} onClick={props.function}>
      {props.name}
    </button>
  );
};

export default ButtonContador;
