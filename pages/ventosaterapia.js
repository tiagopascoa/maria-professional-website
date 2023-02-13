import S from "../styles/pageStyles";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
//Data
import { ventosaterapiaImgs } from "../util/imagesPaths";
//Components
import PagesSlider from "../components/PagesSlider";

const Ventosaterapia = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("ventosaterapia:headTitle")}</title>
        <meta
          name="description"
          content="Ventosaterapia - seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
      </Head>
      <S.TheraSection>
        <S.Title>{t("ventosaterapia:title")}</S.Title>
        <S.Container>
          <PagesSlider images={ventosaterapiaImgs} />
          <S.DescriptionContainer>
            <S.Article>
              <S.SubTitle>{t("ventosaterapia:subTitle1")}</S.SubTitle>
              <S.Text>{t("ventosaterapia:textBlock1")}</S.Text>
            </S.Article>
            <S.Article>
              <S.SubTitle2>{t("ventosaterapia:subTitle2")}</S.SubTitle2>
              <S.List>
                {t(
                  "ventosaterapia:listItems1",
                  {},
                  { returnObjects: true }
                ).map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </S.List>
            </S.Article>
            <S.Article>
              <S.SubTitle2>{t("ventosaterapia:subTitle3")}</S.SubTitle2>
              <S.List>
                {t(
                  "ventosaterapia:listItems2",
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
          <S.LinkAndIconContainer>
            <Link href="/acupuntura-moxabustao" passHref>
              <S.NavLink>
                <S.PrevIcon /> {t("ventosaterapia:previous")}
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
          <S.LinkAndIconContainer>
            <Link href="/massagem-tuina" passHref>
              <S.NavLink>
                {t("ventosaterapia:next")} <S.NextIcon />
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
        </S.NavBtnsContainer>
      </S.TheraSection>
    </>
  );
};

export default Ventosaterapia;
