import styles from "../styles/pageStyles.module.css";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { wheightManagementImgs } from "../util/imagesPaths";
import PagesSlider from "../components/PagesSlider";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const ControloDePeso = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("controlo-de-peso:headTitle")}</title>
        <meta
          name="description"
          content="Tratamentos de Saúde e Estilo de Vida seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
      </Head>
      <section className={styles.theraSection}>
        <h1 className={`${styles.title} ${styles.titleTreatment}`}>
          {t("controlo-de-peso:title")}
        </h1>
        <div className={styles.container}>
          <PagesSlider images={wheightManagementImgs} treatment />
          <div className={`${styles.descriptionContainer} ${styles.descriptionContainerTreatment}`}>
            <h2 className={styles.subTitle}>{t("controlo-de-peso:subTitle1")}</h2>
            <article className={styles.article}>
              <p className={styles.text}>{t("controlo-de-peso:textBlock1")}</p>
            </article>
            <article className={styles.article}>
              <p className={styles.text}>{t("controlo-de-peso:textBlock2")}</p>
            </article>
            <article className={styles.article}>
              <p className={styles.text}>{t("controlo-de-peso:textBlock3")}</p>
            </article>
          </div>
        </div>
        <div className={styles.navBtnsContainer}>
          <div className={styles.linkAndIconContainer}>
            <Link href="/saude-estilo-de-vida" passHref legacyBehavior>
              <a className={styles.navLink}>
                <MdOutlineNavigateBefore className={styles.prevIcon} /> {t("controlo-de-peso:previous")}
              </a>
            </Link>
          </div>
          <div className={styles.linkAndIconContainer}>
            <Link href="/rejuvenescimento-facial" passHref legacyBehavior>
              <a className={styles.navLink}>
                {t("controlo-de-peso:next")} <MdOutlineNavigateNext className={styles.nextIcon} />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ControloDePeso;
