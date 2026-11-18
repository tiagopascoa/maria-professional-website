import styles from "../styles/pageStyles.module.css";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { dieteticaImgs } from "../util/imagesPaths";
import PagesSlider from "../components/PagesSlider";
import { MdOutlineNavigateBefore } from "react-icons/md";

const Dietetica = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("dietetica:headTitle")}</title>
        <meta
          name="description"
          content="Dietética - Tratamentos de dietética seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
      </Head>
      <section className={styles.theraSection}>
        <h1 className={styles.title}>{t("dietetica:title")}</h1>
        <div className={styles.container}>
          <PagesSlider images={dieteticaImgs} />
          <div className={styles.descriptionContainer}>
            <article className={styles.article}>
              <h2 className={styles.subTitle}>{t("dietetica:subTitle1")}</h2>
              <p className={styles.text}>{t("dietetica:textBlock1")}</p>
            </article>
            <article className={styles.article}>
              <p className={styles.text}>{t("dietetica:textBlock2")}</p>
            </article>
            <article className={styles.article}>
              <p className={styles.text}>{t("dietetica:textBlock3")}</p>
            </article>
          </div>
        </div>
        <div className={styles.navBtnsContainer}>
          <div className={styles.linkAndIconContainer}>
            <Link href="/fitoterapia" passHref legacyBehavior>
              <a className={styles.navLink}>
                <MdOutlineNavigateBefore className={styles.prevIcon} /> {t("dietetica:previous")}
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dietetica;
