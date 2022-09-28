import S from "./styles";
import Link from "next/link";

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
          <S.Title>Medicina</S.Title>
          <S.Title secondtitle>Chinesa</S.Title>
        </S.TitleContainer>
        <S.SubTitleContainer>
          <S.SubTitle>Acupuntura</S.SubTitle>

          <S.DotAndSubtitleContainer>
            <S.DotIcon />
            <S.SubTitle>Moxabustão</S.SubTitle>
          </S.DotAndSubtitleContainer>

          <S.DotAndSubtitleContainer>
            <S.DotIcon />
            <S.SubTitle>Massagem Tui Na</S.SubTitle>
          </S.DotAndSubtitleContainer>

          <S.DotAndSubtitleContainer>
            <S.DotIcon />
            <S.SubTitle>Ventosaterapia</S.SubTitle>
          </S.DotAndSubtitleContainer>

          <S.DotAndSubtitleContainer>
            <S.DotIcon />
            <S.SubTitle>Fitoterapia</S.SubTitle>
          </S.DotAndSubtitleContainer>

          <S.DotAndSubtitleContainer>
            <S.DotIcon />
            <S.SubTitle>Dietética e Emagrecimento</S.SubTitle>
          </S.DotAndSubtitleContainer>

          <S.DotAndSubtitleContainer>
            <S.DotIcon />
            <S.SubTitle>acupuntura Facial</S.SubTitle>
          </S.DotAndSubtitleContainer>
        </S.SubTitleContainer>
        <Link href="#therapies" passHref>
          <S.Button>Saber Mais</S.Button>
        </Link>
      </S.TopContainer>
    </S.CoverContainer>
  );
};

export default IntroCover;
