import Header from "@/components/layout/Header/Header";

import styles from "./styles.module.scss";

export default function RootLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}></div>
    </div>
  );
}
