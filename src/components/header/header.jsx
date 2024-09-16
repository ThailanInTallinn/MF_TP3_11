import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.mainHeaderContainer}>
        <h1>Produtos</h1>
        <span
          onClick={() => {
            setMenuToggle(!menuToggle);
          }}
        >
          =
        </span>
      </div>
      <ul
        className={styles.listContainer}
        style={{ display: menuToggle ? "block" : "" }}
      >
        <li>Home</li>
        <li>Produtos</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </header>
  );
}
