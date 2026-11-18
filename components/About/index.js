import styles from "./styles.module.css";
import Image from "next/image";

const About = ({ t }) => {
  return (
    <section className={styles.aboutContainer} id="about">
      <div className={styles.aboutGrid}>
        <h2 className={styles.nameContainer}>
          <span className={styles.firstName}>Maria{" "}</span>
          <span className={styles.lastName}>C. Moreira</span>
        </h2>
        <div className={styles.imageContainer}>
          <Image
            src="/images/about/maria_perfil2.jpg"
            alt="Maria Moreira acupuntura"
            fill
            sizes="(max-width: 768px) 80vw, 40vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.logoGridElement}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/about/logo_about_svg.svg"
              alt="Maria C. Moreira"
              fill
              sizes="90px"
              style={{ objectFit: "cover" }}
              unoptimized
            />
          </div>
        </div>

        <div className={styles.aboutTextContainer}>
          <h3 className={styles.aboutTitle}> {t("home:aboutMe.aboutMeTitle")}</h3>
          <p className={styles.text}>{t("home:aboutMe.paragraph1")}</p>
          <p className={styles.text}>{t("home:aboutMe.paragraph2")}</p>
          <p className={styles.text}>{t("home:aboutMe.paragraph3")}</p>
          <p className={styles.text}>{t("home:aboutMe.paragraph4")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
