import S from "./styles";
import Link from "next/link";

const IntroCover = ({ t }) => {
  return (
    <S.CoverContainer>
      <S.StyledNextImage
        src="/images/accupuncture_cover.jpg"
        alt="acupuntura acupuntura medicina chinesa"
        layout="fill"
        objectFit="cover"
        priority={true}
      />
      <S.TopContainer>
        <S.TitleContainer>
          <S.Title>
            {t("home:introCover.coverTitle1")}
            <br />
            <S.SecondTitle>{t("home:introCover.coverTitle2")}</S.SecondTitle>
          </S.Title>
        </S.TitleContainer>
        <S.SubTitleContainer>
          {/* <S.SubTitle>
            A saúde é a base para a longevidade e a felicidade, mantenha-as
            sempre em equilíbrio. - Lao Tse.
          </S.SubTitle> */}
          {t("home:coverTherapies", {}, { returnObjects: true }).map(
            (therapy, index) => {
              return index === 0 ? (
                <S.SubTitle key={index}>{therapy}</S.SubTitle>
              ) : (
                <S.DotAndSubtitleContainer key={index}>
                  <S.DotIcon />
                  <S.SubTitle>{therapy}</S.SubTitle>
                </S.DotAndSubtitleContainer>
              );
            }
          )}
        </S.SubTitleContainer>
        <Link href="#therapies" passHref>
          <S.Button> {t("common:knowMoreBtn")}</S.Button>
        </Link>
      </S.TopContainer>
    </S.CoverContainer>
  );
};

export default IntroCover;
