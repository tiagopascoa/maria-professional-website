import S from "../styles/pageStyles";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
//Data
import { acupuntureAndMoxaImgs } from "../util/imagesPaths";
//Components
import PagesSlider from "../components/PagesSlider";

const AcupunturaMoxa = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("acupuntura-moxabustao:headTitle")}</title>
        <meta
          name="description"
          content="Acupuntura e Moxabustão -  Tratamentos de acupuntura e moxabustão seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.TheraSection>
        <S.Title>{t("acupuntura-moxabustao:title")}</S.Title>
        <S.Container>
          <PagesSlider images={acupuntureAndMoxaImgs} />
          <S.DescriptionContainer>
            <S.Article>
              <S.SubTitle>{t("acupuntura-moxabustao:subTitle1")}</S.SubTitle>
              <S.Text>{t("acupuntura-moxabustao:textBlock1")}</S.Text>
            </S.Article>
            <S.Article>
              <S.SubTitle>{t("acupuntura-moxabustao:subTitle2")}</S.SubTitle>
              <S.Text>{t("acupuntura-moxabustao:textBlock2")}</S.Text>
            </S.Article>
            <S.Article>
              <S.SubTitle2>{t("acupuntura-moxabustao:subTitle3")}</S.SubTitle2>
              <S.Text>{t("acupuntura-moxabustao:textBlock3")}</S.Text>
              <S.List>
                {t(
                  "acupuntura-moxabustao:listItems",
                  {},
                  { returnObjects: true }
                ).map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </S.List>
            </S.Article>
          </S.DescriptionContainer>
        </S.Container>
        <S.NavBtnsContainer>
          <S.LinkAndIconContainer style={{ marginLeft: "auto" }}>
            <Link href="/ventosaterapia" passHref>
              <S.NavLink>
                {t("acupuntura-moxabustao:next")} <S.NextIcon />
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
        </S.NavBtnsContainer>
      </S.TheraSection>
    </>
  );
};

export default AcupunturaMoxa;
