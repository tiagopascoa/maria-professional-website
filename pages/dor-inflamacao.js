import styles from "../styles/pageStyles.module.css";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { painInflamationImgs } from "../util/imagesPaths";
import PagesSlider from "../components/PagesSlider";
import { MdOutlineNavigateBefore } from "react-icons/md";

const DorInflamacao = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("dor-inflamacao:headTitle")}</title>
        <meta
          name="description"
          content="Tratamentos de Saúde e Estilo de Vida seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
      </Head>
      <section className={styles.theraSection}>
        <h1 className={`${styles.title} ${styles.titleTreatment}`}>
          {t("dor-inflamacao:title")}
        </h1>
        <div className={styles.container}>
          <PagesSlider images={painInflamationImgs} treatment />
          <div className={`${styles.descriptionContainer} ${styles.descriptionContainerTreatment}`}>
            <article className={styles.article}>
              <h2 className={styles.subTitle}>{t("dor-inflamacao:subTitle1")}</h2>
              <p className={styles.text}>{t("dor-inflamacao:textBlock1")}</p>
            </article>
            <article className={styles.article}>
              <h2 className={styles.subTitle}>{t("dor-inflamacao:subTitle2")}</h2>
              <p className={styles.text}>{t("dor-inflamacao:textBlock2")}</p>
            </article>
          </div>
        </div>
        <div className={styles.navBtnsContainer}>
          <div className={styles.linkAndIconContainer}>
            <Link href="/rejuvenescimento-facial" passHref legacyBehavior>
              <a className={styles.navLink}>
                <MdOutlineNavigateBefore className={styles.prevIcon} /> {t("dor-inflamacao:previous")}
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DorInflamacao;
