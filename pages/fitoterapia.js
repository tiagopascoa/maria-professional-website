import S from "./styles";
import Link from "next/link";
//Data
import { fitoterapiaImgs } from "../data/pages";
//Components
import PagesSlider from "../components/PagesSlider";

const Fitoterapia = () => {
  return (
    <S.TheraSection>
      <S.Title>Fitoterapia</S.Title>
      <S.Container>
        <PagesSlider images={fitoterapiaImgs} />
        <S.DescriptionContainer>
          <S.Article>
            <S.SubTitle>Fitoterapia</S.SubTitle>
            <S.Text>
              Regendo-se pelos princípios de diagnóstico e tratamento da
              medicina chinesa, a Fitoterapia consiste na administração de
              fórmulas, combinações de substâncias de origem vegetal, animal ou
              mineral de forma a tratar determinada patologia. Outra das
              ferramentas da Medicina Chinesa com enormes benefícios no
              tratamento de doenças e sintomatologia crónica.
            </S.Text>
          </S.Article>
          <S.Article>
            <S.SubTitle>Benefícios:</S.SubTitle>
            <S.List>
              <li>Fadiga Crónica.</li>
              <li>Apoio à fertilidade.</li>
              <li>Tensão Pré-Menstrual e Dor Menstrual.</li>
              <li>Síndrome Ovários Poliquísticos.</li>
              <li>Insónia.</li>
              <li>Ansiedade.</li>
              <li>Dor crónica e aguda.</li>
              <li>Enxaquecas, dor de cabeça.</li>
              <li>Alergias (sinusite, rinite).</li>
              <li>Amigdalite e rouquidão frequente.</li>
              <li>Dor crónica e aguda.</li>
              <li>Distúrbios gastro-intestinais.</li>
              <li>Acne e Eczema.</li>
              <li>Baixa imunidade.</li>
            </S.List>
          </S.Article>
        </S.DescriptionContainer>
      </S.Container>
      <S.NavBtnsContainer>
        <S.LinkAndIconContainer>
          <Link href="/massagem-tuina" passHref>
            <S.NavLink>
              <S.PrevIcon /> Anterior
            </S.NavLink>
          </Link>
        </S.LinkAndIconContainer>
        <S.LinkAndIconContainer>
          <Link href="/dietetica" passHref>
            <S.NavLink>
              Próxima <S.NextIcon />
            </S.NavLink>
          </Link>
        </S.LinkAndIconContainer>
      </S.NavBtnsContainer>
    </S.TheraSection>
  );
};

export default Fitoterapia;
