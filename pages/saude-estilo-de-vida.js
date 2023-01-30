import S from "../styles/pageStyles";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
//Data
import { acupuntureAndMoxaImgs } from "../util/pages";
//Components
import PagesSlider from "../components/PagesSlider";

const SaudeEstiloDeVida = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("saude-estilo-de-vida:headTitle")}</title>
        <meta
          name="description"
          content="Saúde e Estilo de Vida -  Tratamentos de Saúde e Estilo de Vida seguindo os princípios da Medicina Chinesa com a terapêuta Maria C. Moreira. Consultas em Lisboa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.TheraSection>
        <S.Title treatment={+true}>{t("saude-estilo-de-vida:title")}</S.Title>
        <S.Container>
          <PagesSlider images={acupuntureAndMoxaImgs} treatment={+true} />
          <S.DescriptionContainer treatment={+true}>
            <S.SubTitle>{t("saude-estilo-de-vida:subTitle1")}</S.SubTitle>
            <S.Article>
              <S.Text>{t("saude-estilo-de-vida:textBlock1")}</S.Text>
            </S.Article>
            <S.Article>
              <S.Text>{t("saude-estilo-de-vida:textBlock2")}</S.Text>
            </S.Article>
            <S.Article>
              <S.Text>{t("saude-estilo-de-vida:textBlock3")}</S.Text>
            </S.Article>
          </S.DescriptionContainer>
        </S.Container>
        <S.NavBtnsContainer>
          <S.LinkAndIconContainer style={{ marginLeft: "auto" }} treatment={+true}>
            <Link href="/" passHref>
              <S.NavLink treatment={+true}>
                {t("saude-estilo-de-vida:next")} <S.NextIcon treatment={+true} />
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
        </S.NavBtnsContainer>
      </S.TheraSection>
    </>
  );
};

export default SaudeEstiloDeVida;
