import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { GoPrimitiveDot } from "react-icons/go";

const IntroCover = ({ t }) => {
  return (
    <section className={styles.coverContainer}>
      <Image
        className={styles.coverImage}
        src="/images/accupuncture_cover.jpg"
        alt="acupuntura acupuntura medicina chinesa"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority={true}
      />
      <div className={styles.topContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            {t("home:introCover.coverTitle1")}{" "}
            <br />
            <span className={styles.secondTitle}>{t("home:introCover.coverTitle2")}</span>
          </h1>
        </div>
        <div className={styles.subTitleContainer}>
          {t("home:coverTherapies", {}, { returnObjects: true }).map(
            (therapy, index) => {
              return index === 0 ? (
                <span className={styles.subTitle} key={index}>{therapy}</span>
              ) : (
                <div className={styles.dotAndSubtitleContainer} key={index}>
                  <GoPrimitiveDot className={styles.dotIcon} />
                  <span className={styles.subTitle}>{therapy}</span>
                </div>
              );
            }
          )}
        </div>
        <Link href="#therapies" passHref legacyBehavior>
          <a className={styles.button}> {t("common:knowMoreBtn")}</a>
        </Link>
      </div>
    </section>
  );
};

export default IntroCover;
