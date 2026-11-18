import styles from "../styles/pageStyles.module.css";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { massagemTuinaImgs } from "../util/imagesPaths";
import PagesSlider from "../components/PagesSlider";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const MassagemTuina = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("massagem-tuina:headTitle")}</title>
        <meta
          name="description"
          content="Massagem Tui Na - Tratamentos com a técnica de Massagem Tui Na, seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
      </Head>
      <section className={styles.theraSection}>
        <h1 className={styles.title}>{t("massagem-tuina:title")}</h1>
        <div className={styles.container}>
          <PagesSlider images={massagemTuinaImgs} />
          <div className={styles.descriptionContainer}>
            <article className={styles.article}>
              <h2 className={styles.subTitle}>{t("massagem-tuina:subTitle1")}</h2>
              <p className={styles.text}>{t("massagem-tuina:textBlock1")}</p>
            </article>
            <article className={styles.article}>
              <h3 className={styles.subTitle2}>{t("massagem-tuina:subTitle2")}</h3>
              <ul className={styles.list}>
                {t(
                  "massagem-tuina:listItems1",
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
            <Link href="/ventosaterapia" passHref legacyBehavior>
              <a className={styles.navLink}>
                <MdOutlineNavigateBefore className={styles.prevIcon} /> {t("massagem-tuina:previous")}
              </a>
            </Link>
          </div>
          <div className={styles.linkAndIconContainer}>
            <Link href="/fitoterapia" passHref legacyBehavior>
              <a className={styles.navLink}>
                {t("massagem-tuina:next")} <MdOutlineNavigateNext className={styles.nextIcon} />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MassagemTuina;
