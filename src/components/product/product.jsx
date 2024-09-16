import { useState } from "react";
import styles from "./product.module.css";

export default function Product({ img, name, price, description, specs }) {
  const [picIndex, setPicIndex] = useState(0);

  function changeIndex(index) {
    if (index == 2) {
      setPicIndex(0);
    } else {
      setPicIndex(picIndex + 1);
    }
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.nameContainer}>
        <h2>{name}</h2>
        <img src={img[picIndex]} />
        <button
          onClick={() => {
            changeIndex(picIndex);
          }}
        >
          Próxima imagem
        </button>
      </div>
      <div className={styles.infoContainer}>
        <h3>{price}</h3>
        <h3>Descrição</h3>
        <p>{description}</p>
        <h3>Especificações</h3>
        <p>{specs}</p>
      </div>
    </div>
  );
}
