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
        <title>{t("controlo-de-peso:headTitle")}</title>
        <meta
          name="description"
          content="Tratamentos de Saúde e Estilo de Vida seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.TheraSection>
        <S.Title treatment>{t("controlo-de-peso:title")}</S.Title>
        <S.Container>
          <PagesSlider images={acupuntureAndMoxaImgs} treatment />
          <S.DescriptionContainer treatment>
            <S.SubTitle>{t("controlo-de-peso:subTitle1")}</S.SubTitle>
            <S.Article>
              <S.Text>{t("controlo-de-peso:textBlock1")}</S.Text>
            </S.Article>
            <S.Article>
              <S.Text>{t("controlo-de-peso:textBlock2")}</S.Text>
            </S.Article>
            <S.Article>
              <S.Text>{t("controlo-de-peso:textBlock3")}</S.Text>
            </S.Article>
          </S.DescriptionContainer>
        </S.Container>
        <S.NavBtnsContainer>
          <S.LinkAndIconContainer>
            <Link href="/saude-estilo-de-vida" passHref>
              <S.NavLink>
                <S.PrevIcon /> {t("controlo-de-peso:previous")}
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
          <S.LinkAndIconContainer>
            <Link href="/rejuvenescimento-facial" passHref>
              <S.NavLink>
                {t("controlo-de-peso:next")} <S.NextIcon />
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
        </S.NavBtnsContainer>
      </S.TheraSection>
    </>
  );
};

export default RejuvenescimentoFacial;