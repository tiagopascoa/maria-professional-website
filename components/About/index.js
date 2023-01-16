import S from "./styles";
import Image from "next/image";

const About = ({t}) => {
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
              /* width={100} */
              /* height={100} */
              layout="fill"
              objectFit="cover"
            />
          </S.LogoContainer>
        </S.LogoGridElement>

        <S.AboutTextContainer>
          <S.AboutTitle> {t("home:aboutMe.aboutMeTitle")}</S.AboutTitle>
          <S.Text>
            Formada na ESMTC - Escola de Medicina Tradicional Chinesa.
          </S.Text>
          <S.Text>
            Em 2013, estágio de quatro meses na China, em ambiente hospitalar e
            em parceria com a Nanjing University of Chinese Medicine.
          </S.Text>
          <S.Text>
            Desde então, a exercer em Lisboa, promovendo a saúde e a longevidade
            através desta arte milenar.
          </S.Text>
          <S.Text>
            Vários cursos e ações de formação, com especializações em áreas como
            a acupuntura facial e a osteopatia.
          </S.Text>
        </S.AboutTextContainer>
      </S.AboutGrid>
    </S.AboutContainer>
  );
};

export default About;
