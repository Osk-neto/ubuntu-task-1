import { useState } from "react";
import styles from "./Contador.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ButtonContador from "../UI/ButtonContador";

const Contador = () => {
  const [numeroContado, setNumeroContado] = useState(0);
  const plusOneHandler = () => setNumeroContado(numeroContado + 1);
  const plusTenHandler = () => setNumeroContado(numeroContado + 10);
  const plusHundredHandler = () => setNumeroContado(numeroContado + 100);
  const lessOneHandler = () => setNumeroContado(numeroContado - 1);
  const lessTenHandler = () => setNumeroContado(numeroContado - 10);
  const lessHundredHandler = () => setNumeroContado(numeroContado - 100);
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <h1>Numero Acumulado</h1>
        <h2>{numeroContado}</h2>
        <div className={styles.contadorSection}>
          <ButtonContador name="+1" function={plusOneHandler} />
          <ButtonContador name="+10" function={plusTenHandler} />
          <ButtonContador name="+100" function={plusHundredHandler} />
          <ButtonContador name="-1" function={lessOneHandler} />
          <ButtonContador name="-10" function={lessTenHandler} />
          <ButtonContador name="-100" function={lessHundredHandler} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contador;
