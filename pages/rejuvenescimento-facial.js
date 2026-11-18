import styles from "../styles/pageStyles.module.css";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { facialImgs } from "../util/imagesPaths";
import PagesSlider from "../components/PagesSlider";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const RejuvenescimentoFacial = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("rejuvenescimento-facial:headTitle")}</title>
        <meta
          name="description"
          content="Tratamentos de Saúde e Estilo de Vida seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
      </Head>
      <section className={styles.theraSection}>
        <h1 className={`${styles.title} ${styles.titleTreatment}`}>
          {t("rejuvenescimento-facial:title")}
        </h1>
        <div className={styles.container}>
          <PagesSlider images={facialImgs} treatment />
          <div className={`${styles.descriptionContainer} ${styles.descriptionContainerTreatment}`}>
            <article className={styles.article}>
              <h2 className={styles.subTitle}>{t("rejuvenescimento-facial:subTitle1")}</h2>
              <p className={styles.text}>{t("rejuvenescimento-facial:textBlock1")}</p>
            </article>
            <article className={styles.article}>
              <h2 className={styles.subTitle}>{t("rejuvenescimento-facial:subTitle2")}</h2>
              <p className={styles.text}>{t("rejuvenescimento-facial:textBlock2")}</p>
            </article>
            <article className={styles.article}>
              <h2 className={styles.subTitle}>{t("rejuvenescimento-facial:subTitle3")}</h2>
              <p className={styles.text}>{t("rejuvenescimento-facial:textBlock3")}</p>
            </article>
            <article className={styles.article}>
              <h2 className={styles.subTitle}>{t("rejuvenescimento-facial:subTitle4")}</h2>
              <p className={styles.text}>{t("rejuvenescimento-facial:textBlock4")}</p>
            </article>
          </div>
        </div>
        <div className={styles.navBtnsContainer}>
          <div className={styles.linkAndIconContainer}>
            <Link href="/controlo-de-peso" passHref legacyBehavior>
              <a className={styles.navLink}>
                <MdOutlineNavigateBefore className={styles.prevIcon} /> {t("rejuvenescimento-facial:previous")}
              </a>
            </Link>
          </div>
          <div className={styles.linkAndIconContainer}>
            <Link href="/dor-inflamacao" passHref legacyBehavior>
              <a className={styles.navLink}>
                {t("rejuvenescimento-facial:next")} <MdOutlineNavigateNext className={styles.nextIcon} />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RejuvenescimentoFacial;
