import S from "./styles";
import Image from "next/image";

const About = ({ t }) => {
  return (
    <S.AboutContainer id="about">
      <S.AboutGrid>
        <S.NameContainer>
          <S.FirstName>Maria</S.FirstName>
          <S.LastName>C. Moreira</S.LastName>
        </S.NameContainer>
        <S.ImageContainer>
          <Image
            src="/images/about/maria_perfil2.jpg"
            alt="Maria Moreira acupuntura"
            layout="fill"
            objectFit="cover"
          />
        </S.ImageContainer>
        <S.LogoGridElement>
          <S.LogoContainer>
            <S.StyledImage
              src="/images/about/logo_about_svg.svg"
              alt="Maria C. Moreira"
              layout="fill"
              objectFit="cover"
            />
          </S.LogoContainer>
        </S.LogoGridElement>

        <S.AboutTextContainer>
          <S.AboutTitle> {t("home:aboutMe.aboutMeTitle")}</S.AboutTitle>
          <S.Text>{t("home:aboutMe.paragraph1")}</S.Text>
          <S.Text>{t("home:aboutMe.paragraph2")}</S.Text>
          <S.Text>{t("home:aboutMe.paragraph3")}</S.Text>
          <S.Text>{t("home:aboutMe.paragraph4")}</S.Text>
        </S.AboutTextContainer>
      </S.AboutGrid>
    </S.AboutContainer>
  );
};

export default About;
