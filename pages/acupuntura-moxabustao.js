import styles from "../styles/pageStyles.module.css";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { acupuntureAndMoxaImgs } from "../util/imagesPaths";
import PagesSlider from "../components/PagesSlider";
import { MdOutlineNavigateNext } from "react-icons/md";

const AcupunturaMoxa = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("acupuntura-moxabustao:headTitle")}</title>
        <meta
          name="description"
          content="Acupuntura e Moxabustão -  Tratamentos de acupuntura e moxabustão seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
      </Head>
      <section className={styles.theraSection}>
        <h1 className={styles.title}>{t("acupuntura-moxabustao:title")}</h1>
        <div className={styles.container}>
          <PagesSlider images={acupuntureAndMoxaImgs} />
          <div className={styles.descriptionContainer}>
            <article className={styles.article}>
              <h2 className={styles.subTitle}>{t("acupuntura-moxabustao:subTitle1")}</h2>
              <p className={styles.text}>{t("acupuntura-moxabustao:textBlock1")}</p>
            </article>
            <article className={styles.article}>
              <h2 className={styles.subTitle}>{t("acupuntura-moxabustao:subTitle2")}</h2>
              <p className={styles.text}>{t("acupuntura-moxabustao:textBlock2")}</p>
            </article>
            <article className={styles.article}>
              <h3 className={styles.subTitle2}>{t("acupuntura-moxabustao:subTitle3")}</h3>
              <p className={styles.text}>{t("acupuntura-moxabustao:textBlock3")}</p>
              <ul className={styles.list}>
                {t(
                  "acupuntura-moxabustao:listItems",
                  {},
                  { returnObjects: true }
                ).map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </article>
          </div>
        </div>
        <div className={styles.navBtnsContainer}>
          <div className={styles.linkAndIconContainer} style={{ marginLeft: "auto" }}>
            <Link href="/ventosaterapia" passHref legacyBehavior>
              <a className={styles.navLink}>
                {t("acupuntura-moxabustao:next")} <MdOutlineNavigateNext className={styles.nextIcon} />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcupunturaMoxa;
