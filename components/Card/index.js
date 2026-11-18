import Link from "next/link";
import styles from "./styles.module.css";

const Card = ({ therapiestyles, title, image, path, t }) => {
  const cardClassName = `${styles.card}${
    therapiestyles ? ` ${styles.cardTherapy}` : ""
  }`;
  const buttonClassName = `${styles.button}${
    therapiestyles ? ` ${styles.buttonTherapy}` : ""
  }`;

  return (
    <div className={cardClassName}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.imageContainer}>{image}</div>
      <Link href={path} passHref legacyBehavior>
        <a className={buttonClassName}>{t("common:knowMoreBtn")}</a>
      </Link>
    </div>
  );
};

export default Card;
