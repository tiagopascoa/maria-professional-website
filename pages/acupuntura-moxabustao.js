import S from "../styles/styles"
import Link from "next/link";
//Data
import { acupuntureAndMoxaImgs } from "../data/pages";
//Components
import PagesSlider from "../components/PagesSlider";

const AcupunturaMoxa = () => {
  return (
    <S.TheraSection>
      {/* <S.BackAndTitleContainer>
        <S.NavBtnsContainer>
          <S.LinkAndIconContainer>
            <Link href="/#therapies" passHref>
              <S.NavLink>
                <S.PrevIcon />
                Voltar
              </S.NavLink>
            </Link>
          </S.LinkAndIconContainer>
        </S.NavBtnsContainer>
        <S.Title>Acupuntura e Moxabustão</S.Title>
      </S.BackAndTitleContainer> */}
      <S.Title>Acupuntura e Moxabustão</S.Title>
      <S.Container>
        <PagesSlider images={acupuntureAndMoxaImgs} />
        <S.DescriptionContainer>
          <S.Article>
            <S.SubTitle>Acupuntura</S.SubTitle>
            <S.Text>
              Esta técnica é dos recursos mais conhecidos da Medicina Chinesa e
              desde 2010 que faz parte do Património cultural intagível da
              UNESCO. Os efeitos terapêuticos da acupunctura são conseguidos
              através da inserção e estimulação de agulhas extremamente finas em
              pontos específicos do corpo que regulam e restabelecem a
              circulação activando a homeostase a capacidade do corpo humano de
              auto-regulação. Os pontos estão agrupados num conjunto de
              meridianos, canais invisíveis que correm ao longitudinalmente na
              superfície do corpo onde circula Qi. Quando esta circulação é
              perturbada origina a doença.
            </S.Text>
          </S.Article>
          <S.Article>
            <S.SubTitle>Moxabustão</S.SubTitle>
            <S.Text>
              Estima-se que esta técnica é a mais antiga forma de acupunctura.
              Funciona como uma técnica de acupunctura térmica, os pontos são
              estimulados desta vez com a aplicação de calor através da
              combustão de uma planta, Artemísia Vulgaris. A Artemisia é tratada
              de forma a obter um algodão, que pode ser prensado em charutos ou
              moldado, para fazer bagos de arroz ou cones e estimular pontos
              específicos ou áreas do corpo, com o fim de restabelecer ou
              reforçar a circulação nos meridianos através dos seus efeitos
              anti-inflamatórios, analgésico e vaso-dilatador.
            </S.Text>
          </S.Article>
          <S.Article>
            <S.SubTitle>Benefícios:</S.SubTitle>
            <S.Text>
              Os benefícios destas técnicas são imensos sendo que a OMS
              (Organização Mundial de Saúde) definiu ser eficaz no tratamento
              das seguintes doenças:
            </S.Text>
            <S.List>
              <li>
                Respiratórias: sinusite, rinite, amigdalite, constipações,
                bronquite aguda e asmática.
              </li>
              <li>Oculares: conjutivite aguda, miopia, cataratas.</li>
              <li>
                Gástricas: gastrite aguda e crónica, hiperacidez, colite,
                ulceras sem complicações, obstipação, diarreia, dores de dentes,
                gengivite e faringite.
              </li>
              <li>
                Musculo-esqueléticos: dor de cabeça, enxaqueca, nevralgia do
                trigémeo, paralisia facial periférica, doença de Meniére,
                incontinência urinária, dor lombar, cervical ou toráxica,
                epicondilite e capsulite.
              </li>
            </S.List>
          </S.Article>
        </S.DescriptionContainer>
      </S.Container>
      <S.NavBtnsContainer>
        <S.LinkAndIconContainer style={{ marginLeft: "auto" }}>
          <Link href="/ventosaterapia" passHref>
            <S.NavLink>
              Próxima <S.NextIcon />{" "}
            </S.NavLink>
          </Link>
        </S.LinkAndIconContainer>
      </S.NavBtnsContainer>
    </S.TheraSection>
  );
};

export default AcupunturaMoxa;
