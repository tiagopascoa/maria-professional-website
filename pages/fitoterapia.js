import S from "../styles/pageStyles";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
//Data
import { fitoterapiaImgs } from "../util/imagesPaths";
//Components
import PagesSlider from "../components/PagesSlider";

const Fitoterapia = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("fitoterapia:headTitle")}</title>
        <meta
          name="description"
          content="Fitoterapia -  Tratamentos de fitoterapia seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
      </Head>
      <S.TheraSection>
        <S.Title>{t("fitoterapia:title")}</S.Title>
        <S.Container>
          <PagesSlider images={fitoterapiaImgs} />
          <S.DescriptionContainer>
            <S.Article>
              <S.SubTitle>{t("fitoterapia:subTitle1")}</S.SubTitle>
              <S.Text>{t("fitoterapia:textBlock1")}</S.Text>
            </S.Article>
            <S.Article>
              <S.SubTitle2>{t("fitoterapia:subTitle2")}</S.SubTitle2>
              <S.List>
                {t("fitoterapia:listItems1", {}, { returnObjects: true }).map(
                  (item, index) => {
                    return <li key={index}>{item}</li>;
                  }
                )}
              </S.List>
            </S.Article>
          </S.DescriptionContainer>
        </S.Container>
        <S.NavBtnsContainer>
          <S.LinkAndIconContainer>
            <Link href="/massagem-tuina" passHref>
              <S.NavLink>
                <S.PrevIcon /> {t("fitoterapia:previous")}
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
          <S.LinkAndIconContainer>
            <Link href="/dietetica" passHref>
              <S.NavLink>
                {t("fitoterapia:next")} <S.NextIcon />
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
        </S.NavBtnsContainer>
      </S.TheraSection>
    </>
  );
};

export default Fitoterapia;
