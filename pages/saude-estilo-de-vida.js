import styles from "../styles/pageStyles.module.css";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { healthAndLFImgs } from "../util/imagesPaths";
import PagesSlider from "../components/PagesSlider";
import { MdOutlineNavigateNext } from "react-icons/md";

const SaudeEstiloDeVida = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("saude-estilo-de-vida:headTitle")}</title>
        <meta
          name="description"
          content="Tratamentos de Saúde e Estilo de Vida seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
      </Head>
      <section className={styles.theraSection}>
        <h1 className={`${styles.title} ${styles.titleTreatment}`}>
          {t("saude-estilo-de-vida:title")}
        </h1>
        <div className={styles.container}>
          <PagesSlider images={healthAndLFImgs} treatment />
          <div className={`${styles.descriptionContainer} ${styles.descriptionContainerTreatment}`}>
            <h2 className={styles.subTitle}>{t("saude-estilo-de-vida:subTitle1")}</h2>
            <article className={styles.article}>
              <p className={styles.text}>{t("saude-estilo-de-vida:textBlock1")}</p>
            </article>
            <article className={styles.article}>
              <p className={styles.text}>{t("saude-estilo-de-vida:textBlock2")}</p>
            </article>
            <article className={styles.article}>
              <p className={styles.text}>{t("saude-estilo-de-vida:textBlock3")}</p>
            </article>
          </div>
        </div>
        <div className={styles.navBtnsContainer}>
          <div className={styles.linkAndIconContainer} style={{ marginLeft: "auto" }}>
            <Link href="/controlo-de-peso" passHref legacyBehavior>
              <a className={styles.navLink}>
                {t("saude-estilo-de-vida:next")} <MdOutlineNavigateNext className={styles.nextIcon} />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SaudeEstiloDeVida;
