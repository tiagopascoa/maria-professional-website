import S from "../styles/pageStyles";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
//Data
import { acupuntureAndMoxaImgs } from "../util/pages";
//Components
import PagesSlider from "../components/PagesSlider";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.TheraSection>
        <S.Title treatment>{t("rejuvenescimento-facial:title")}</S.Title>
        <S.Container>
          <PagesSlider images={acupuntureAndMoxaImgs} treatment />
          <S.DescriptionContainer treatment>
            <S.Article>
              <S.SubTitle>{t("rejuvenescimento-facial:subTitle1")}</S.SubTitle>

              <S.Text>{t("rejuvenescimento-facial:textBlock1")}</S.Text>
            </S.Article>
            <S.Article>
              <S.SubTitle>{t("rejuvenescimento-facial:subTitle2")}</S.SubTitle>
              <S.Text>{t("rejuvenescimento-facial:textBlock2")}</S.Text>
            </S.Article>
            <S.Article>
              <S.SubTitle>{t("rejuvenescimento-facial:subTitle3")}</S.SubTitle>
              <S.Text>{t("rejuvenescimento-facial:textBlock3")}</S.Text>
            </S.Article>
            <S.Article>
              <S.SubTitle>{t("rejuvenescimento-facial:subTitle4")}</S.SubTitle>
              <S.Text>{t("rejuvenescimento-facial:textBlock4")}</S.Text>
            </S.Article>
          </S.DescriptionContainer>
        </S.Container>
        <S.NavBtnsContainer>
          <S.LinkAndIconContainer>
            <Link href="/controlo-de-peso" passHref>
              <S.NavLink>
                <S.PrevIcon /> {t("rejuvenescimento-facial:previous")}
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
          <S.LinkAndIconContainer>
            <Link href="/dor-inflamacao" passHref>
              <S.NavLink>
                {t("rejuvenescimento-facial:next")} <S.NextIcon />
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
        </S.NavBtnsContainer>
      </S.TheraSection>
    </>
  );
};

export default RejuvenescimentoFacial;
