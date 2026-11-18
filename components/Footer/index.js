import styles from "./styles.module.css";

const Footer = ({ t }) => {
  const currentYear = new Date().getFullYear();
  return (
    <section className={styles.footerContainer}>
      <div className={styles.copyContainer}>
        <span className={styles.copyText}>CopyRight © {currentYear} Maria C. Moreira.</span>
        <span className={styles.copyText}> {t("common:footer.allRightsReserved")}</span>
      </div>
    </section>
  );
};

export default Footer;
