import S from "./styles";
import Link from "next/link";
//Data
import { ventosaterapiaImgs } from "../data/pages";
//Components
import PagesSlider from "../components/PagesSlider";

const Ventosaterapia = () => {
  return (
    <S.TheraSection>
      <S.Title>Ventosaterapia</S.Title>
      <S.Container>
        <PagesSlider images={ventosaterapiaImgs} />
        <S.DescriptionContainer>
          <S.Article>
            <S.SubTitle>Ventosaterapia</S.SubTitle>
            <S.Text>
              Esta técnica consiste na aplicação de copos que podem ser de bambu
              ou vidro, que com a aplicação de fogo fazem sucção na pele,
              através do aumento da circulação de Qi e sangue local e uma maior
              oxigenação, drenando e relaxando os músculos e ligamentos. É
              depois da massagem das técnicas preferidas dos pacientes
              originando uma sensação de bem-estar imediata. Esta técnica pode
              ser usada em todas as idades desde crianças a idosos.
            </S.Text>
          </S.Article>
          <S.Article>
            <S.SubTitle>Benefícios:</S.SubTitle>
            <S.List>
              <li>Aumento da circulação sanguínea local.</li>
              <li>
                Eliminação da dor e de contraturas musculares e pontos gatilho.
              </li>
              <li>Fortalece os vasos sanguíneos;</li>
              <li>
                Aumentar a produção de líquido sinovial dentro das articulações.
              </li>
              <li>
                Relaxar e acalmar o corpo e a mente, pela sua actuação no
                sistema nervoso.
              </li>
              <li>Doenças pulmonares (asma, bronquites, constipações, etc);</li>
              <li>Desordens gastro-intestinais.</li>
              <li>
                Estético: pode ser usada para combater obesidade e celulite.
              </li>
            </S.List>
          </S.Article>
          <S.Article>
            {/* <S.Text>Pode ser usada em patologias como:</S.Text> */}
            <S.SubTitle>Patologias em que pode ser usada:</S.SubTitle>
            <S.List>
              <li>Bronquites e asma.</li>
              <li>
                Obstipação, diarreias e outras patologias gastro-intestinais.
              </li>
              <li>Depressão, stress e ansiedade.</li>
              <li>Celulite e obesidade.</li>
            </S.List>
          </S.Article>
        </S.DescriptionContainer>
      </S.Container>
      <S.NavBtnsContainer>
        <S.LinkAndIconContainer>
          <Link href="/acupuntura-moxabustao" passHref>
            <S.NavLink>
              <S.PrevIcon /> Anterior
            </S.NavLink>
          </Link>
        </S.LinkAndIconContainer>
        <S.LinkAndIconContainer>
          <Link href="/massagem-tuina" passHref>
            <S.NavLink>
              Próxima <S.NextIcon />
            </S.NavLink>
          </Link>
        </S.LinkAndIconContainer>
      </S.NavBtnsContainer>
    </S.TheraSection>
  );
};

export default Ventosaterapia;
