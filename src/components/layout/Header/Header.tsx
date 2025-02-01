import React from "react";

import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src='/images/logo/image.png'
        alt=''
      />
    </header>
  );
}
