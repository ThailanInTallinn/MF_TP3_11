import styles from "./product.module.css";

export default function Product({ img }) {
  return (
    <div className={styles.productContainer}>
      <img src={img} />
    </div>
  );
}
