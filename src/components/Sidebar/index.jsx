import { PencilLine } from "phosphor-react";

import styles from "./styles.module.css";

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          src="https://avatars.githubusercontent.com/u/32773611?v=4"
          className={styles.avatar} />

        <strong>Roberto Oliveira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}