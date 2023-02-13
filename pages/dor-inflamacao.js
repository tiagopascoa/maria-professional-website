import S from "../styles/pageStyles";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
//Data
import { painInflamationImgs } from "../util/imagesPaths";
//Components
import PagesSlider from "../components/PagesSlider";

const DorInflamacao = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("dor-inflamacao:headTitle")}</title>
        <meta
          name="description"
          content="Tratamentos de Saúde e Estilo de Vida seguindo os princípios da Medicina Chinesa com a terapeuta Maria C. Moreira. Consultas em Lisboa"
        />
      </Head>
      <S.TheraSection>
        <S.Title treatment>{t("dor-inflamacao:title")}</S.Title>
        <S.Container>
          <PagesSlider images={painInflamationImgs} treatment />
          <S.DescriptionContainer treatment>
            <S.Article>
              <S.SubTitle>{t("dor-inflamacao:subTitle1")}</S.SubTitle>

              <S.Text>{t("dor-inflamacao:textBlock1")}</S.Text>
            </S.Article>
            <S.Article>
              <S.SubTitle>{t("dor-inflamacao:subTitle2")}</S.SubTitle>
              <S.Text>{t("dor-inflamacao:textBlock2")}</S.Text>
            </S.Article>
          </S.DescriptionContainer>
        </S.Container>
        <S.NavBtnsContainer>
          <S.LinkAndIconContainer>
            <Link href="/rejuvenescimento-facial" passHref>
              <S.NavLink>
                <S.PrevIcon /> {t("dor-inflamacao:previous")}
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
        </S.NavBtnsContainer>
      </S.TheraSection>
    </>
  );
};

export default DorInflamacao;
