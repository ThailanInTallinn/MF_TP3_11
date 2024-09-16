import styles from "./otherproduct.module.css";

export default function OtherProduct({ img, name, price }) {
  return (
    <div className={styles.productCard}>
      <img src={img} />
      <div className={styles.textContainer}>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
}
