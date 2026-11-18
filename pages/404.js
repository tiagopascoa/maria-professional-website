import styles from "../styles/pageStyles.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className={styles.noPageContainer}>
      <h1>404 - Pedimos desculpa mas não encontramos esta página.</h1>
      <Link href="/">Voltar à página principal.</Link>
    </div>
  );
}
