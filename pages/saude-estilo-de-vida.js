import S from "../styles/pageStyles";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
//Data
import { healthAndLFImgs } from "../util/imagesPaths";
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
          content="Tratamentos de Saúde e Estilo de Vida seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
      </Head>
      <S.TheraSection>
        <S.Title treatment={+true}>{t("saude-estilo-de-vida:title")}</S.Title>
        <S.Container>
          <PagesSlider images={healthAndLFImgs} treatment={+true} />
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
          <S.LinkAndIconContainer style={{ marginLeft: "auto" }}>
            <Link href="/controlo-de-peso" passHref>
              <S.NavLink>
                {t("saude-estilo-de-vida:next")} <S.NextIcon />
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
        </S.NavBtnsContainer>
      </S.TheraSection>
    </>
  );
};

export default SaudeEstiloDeVida;
