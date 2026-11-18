import styles from "../styles/pageStyles.module.css";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { fitoterapiaImgs } from "../util/imagesPaths";
import PagesSlider from "../components/PagesSlider";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Fitoterapia = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("fitoterapia:headTitle")}</title>
        <meta
          name="description"
          content="Fitoterapia -  Tratamentos de fitoterapia seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
      </Head>
      <section className={styles.theraSection}>
        <h1 className={styles.title}>{t("fitoterapia:title")}</h1>
        <div className={styles.container}>
          <PagesSlider images={fitoterapiaImgs} />
          <div className={styles.descriptionContainer}>
            <article className={styles.article}>
              <h2 className={styles.subTitle}>{t("fitoterapia:subTitle1")}</h2>
              <p className={styles.text}>{t("fitoterapia:textBlock1")}</p>
            </article>
            <article className={styles.article}>
              <h3 className={styles.subTitle2}>{t("fitoterapia:subTitle2")}</h3>
              <ul className={styles.list}>
                {t("fitoterapia:listItems1", {}, { returnObjects: true }).map(
                  (item, index) => {
                    return <li key={index}>{item}</li>;
                  }
                )}
              </ul>
            </article>
          </div>
        </div>
        <div className={styles.navBtnsContainer}>
          <div className={styles.linkAndIconContainer}>
            <Link href="/massagem-tuina" passHref legacyBehavior>
              <a className={styles.navLink}>
                <MdOutlineNavigateBefore className={styles.prevIcon} /> {t("fitoterapia:previous")}
              </a>
            </Link>
          </div>
          <div className={styles.linkAndIconContainer}>
            <Link href="/dietetica" passHref legacyBehavior>
              <a className={styles.navLink}>
                {t("fitoterapia:next")} <MdOutlineNavigateNext className={styles.nextIcon} />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fitoterapia;
