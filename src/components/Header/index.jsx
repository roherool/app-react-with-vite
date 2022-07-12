import styles from "./styles.module.css";

import igniteLogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.container}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <h1>Feed news</h1>
    </header>
  );
}