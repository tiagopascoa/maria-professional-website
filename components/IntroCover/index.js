import S from "./styles";
import Link from "next/link";
//data
import { coverTherapies } from "../../data/IntroCover";

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
