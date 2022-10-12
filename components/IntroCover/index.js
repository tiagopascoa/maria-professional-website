import S from "./styles";
import Link from "next/link";

const coverTherapies = [
  "Acupuntura",
  "Moxabustão",
  "Massagem Tui Na",
  "Ventosaterapia",
  "Fitoterapia",
  "Dietética e Emagrecimento",
  "Acupuntura Facial",
];

const IntroCover = () => {
  return (
    <S.CoverContainer>
      <S.StyledNextImage
        src="/images/accupuncture_cover.jpg"
        alt="acupuntura acupuntura medicina chinesa"
        layout="fill"
        objectFit="cover"
        priority
      />
      <S.TopContainer>
        <S.TitleContainer>
          <S.Title>
            Medicina <S.SecondTitle>Chinesa</S.SecondTitle>
          </S.Title>
          {/* <S.Title secondtitle>Chinesa</S.Title> */}
        </S.TitleContainer>
        <S.SubTitleContainer>
          {coverTherapies.map((therapy, index) => {
            return index === 0 ? (
              <S.SubTitle key={index}>{therapy}</S.SubTitle>
            ) : (
              <S.DotAndSubtitleContainer key={index}>
                <S.DotIcon />
                <S.SubTitle>{therapy}</S.SubTitle>
              </S.DotAndSubtitleContainer>
            );
          })}
        </S.SubTitleContainer>
        <Link href="#therapies" passHref>
          <S.Button>Saber Mais</S.Button>
        </Link>
      </S.TopContainer>
    </S.CoverContainer>
  );
};

export default IntroCover;
