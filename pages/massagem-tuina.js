import S from "../styles/pageStyles";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
//Data
import { massagemTuinaImgs } from "../util/pages";
//Components
import PagesSlider from "../components/PagesSlider";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.TheraSection>
        <S.Title>{t("massagem-tuina:title")}</S.Title>
        <S.Container>
          <PagesSlider images={massagemTuinaImgs} />
          <S.DescriptionContainer>
            <S.Article>
              <S.SubTitle>{t("massagem-tuina:subTitle1")}</S.SubTitle>
              <S.Text>{t("massagem-tuina:textBlock1")}</S.Text>
            </S.Article>
            <S.Article>
              <S.SubTitle2>{t("massagem-tuina:subTitle2")}</S.SubTitle2>
              <S.List>
                {t(
                  "massagem-tuina:listItems1",
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
            <Link href="/ventosaterapia" passHref>
              <S.NavLink>
                <S.PrevIcon /> {t("massagem-tuina:previous")}
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
          <S.LinkAndIconContainer>
            <Link href="/fitoterapia" passHref>
              <S.NavLink>
                {t("massagem-tuina:next")} <S.NextIcon />
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
        </S.NavBtnsContainer>
      </S.TheraSection>
    </>
  );
};

export default MassagemTuina;
