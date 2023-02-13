import S from "../styles/pageStyles";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
//Data
import { dieteticaImgs } from "../util/imagesPaths";
//Components
import PagesSlider from "../components/PagesSlider";

const Dietetica = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("dietetica:headTitle")}</title>
        <meta
          name="description"
          content="Dietética - Tratamentos de dietética seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.TheraSection>
        <S.Title>{t("dietetica:title")}</S.Title>
        <S.Container>
          <PagesSlider images={dieteticaImgs} />
          <S.DescriptionContainer>
            <S.Article>
              <S.SubTitle>{t("dietetica:subTitle1")}</S.SubTitle>
              <S.Text>{t("dietetica:textBlock1")}</S.Text>
            </S.Article>
            <S.Article>
              <S.Text>{t("dietetica:textBlock2")}</S.Text>
            </S.Article>
            <S.Article>
              <S.Text>{t("dietetica:textBlock3")}</S.Text>
            </S.Article>
          </S.DescriptionContainer>
        </S.Container>
        <S.NavBtnsContainer>
          <S.LinkAndIconContainer>
            <Link href="/fitoterapia" passHref>
              <S.NavLink>
                <S.PrevIcon /> {t("dietetica:previous")}
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
        </S.NavBtnsContainer>
      </S.TheraSection>
    </>
  );
};

export default Dietetica;
