import styles from "../styles/pageStyles.module.css";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { ventosaterapiaImgs } from "../util/imagesPaths";
import PagesSlider from "../components/PagesSlider";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Ventosaterapia = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("ventosaterapia:headTitle")}</title>
        <meta
          name="description"
          content="Ventosaterapia - seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
      </Head>
      <section className={styles.theraSection}>
        <h1 className={styles.title}>{t("ventosaterapia:title")}</h1>
        <div className={styles.container}>
          <PagesSlider images={ventosaterapiaImgs} />
          <div className={styles.descriptionContainer}>
            <article className={styles.article}>
              <h2 className={styles.subTitle}>{t("ventosaterapia:subTitle1")}</h2>
              <p className={styles.text}>{t("ventosaterapia:textBlock1")}</p>
            </article>
            <article className={styles.article}>
              <h3 className={styles.subTitle2}>{t("ventosaterapia:subTitle2")}</h3>
              <ul className={styles.list}>
                {t(
                  "ventosaterapia:listItems1",
                  {},
                  { returnObjects: true }
                ).map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </article>
            <article className={styles.article}>
              <h3 className={styles.subTitle2}>{t("ventosaterapia:subTitle3")}</h3>
              <ul className={styles.list}>
                {t(
                  "ventosaterapia:listItems2",
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
          <div className={styles.linkAndIconContainer}>
            <Link href="/acupuntura-moxabustao" passHref legacyBehavior>
              <a className={styles.navLink}>
                <MdOutlineNavigateBefore className={styles.prevIcon} /> {t("ventosaterapia:previous")}
              </a>
            </Link>
          </div>
          <div className={styles.linkAndIconContainer}>
            <Link href="/massagem-tuina" passHref legacyBehavior>
              <a className={styles.navLink}>
                {t("ventosaterapia:next")} <MdOutlineNavigateNext className={styles.nextIcon} />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ventosaterapia;
