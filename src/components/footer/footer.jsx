import styles from "./footer.module.css";
import OtherProduct from "./otherproduct";

export default function Footer() {
  const productsList = [];

  function multiplyProducts() {
    for (let i = 0; i < 9; i++) {
      productsList.push(
        <OtherProduct
          img="https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/embody_chairs/ig_prd_ovw_embody_chairs_01.jpg.rendition.1152.1152.jpg"
          name="Embody chair"
          price="R$ Caro"
        />
      );
    }

    return productsList;
  }

  return (
    <div className={styles.footerContainer}>
      <h2>Produtos relacionados</h2>
      <div className={styles.productsList}>{multiplyProducts()}</div>
    </div>
  );
}
