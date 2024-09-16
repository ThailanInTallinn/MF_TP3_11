import styles from "./product.module.css";

export default function Product({ img, name, price, description, specs }) {
  return (
    <div className={styles.productContainer}>
      <img src={img[0]} />
      <div className={styles.infoContainer}>
        <h2>{name}</h2>
        <p>{price}</p>
        <h3>Descrição</h3>
        <p>{description}</p>
        <h3>Especificações</h3>
        <p>{specs}</p>
      </div>
    </div>
  );
}
