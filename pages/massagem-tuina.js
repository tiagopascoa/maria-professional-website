import S from "./styles";
import Link from "next/link";
//Data
import { massagemTuinaImgs } from "../data/pages";
//Components
import PagesSlider from "../components/PagesSlider";

const MassagemTuina = () => {
  return (
    <S.TheraSection>
      <S.Title>Massagem Tui Na</S.Title>
      <S.Container>
        <PagesSlider images={massagemTuinaImgs} />
        <S.DescriptionContainer>
          <S.Article>
            <S.SubTitle>Massagem Tui Na</S.SubTitle>
            <S.Text>
              A massagem TuiNa é mais um dos recursos terapêuticos milenares da
              Medicina Chinesa. Utiliza como ferramenta de diagnóstico e
              tratamento a palpação e estímulo manual, de forma a restabelecer a
              circulação de Qi e sangue nos meridianos aliviando a dor,
              drenando, restaurando e relaxando os músculos e ligamentos obtendo
              uma sensação de bem-estar.
            </S.Text>
          </S.Article>
          <S.Article>
            <S.SubTitle>Patologias em que pode ser usada:</S.SubTitle>
            <S.List>
              <li>
                Patologia óssea e articular inflamatória e dolorosa:
                epicondilite, síndrome do canal cárpico, artrite reumatóide,
                lombalgia, dorsalgia, cervicalgia.
              </li>
              <li>
                Do foro respiratório: tosse, constipações, bronquites, asma.
              </li>
              <li>
                Gastrointestinal: diarreia, obstipação, refluxo, vómitos/
                náuseas, cólicas, gastralgia.
              </li>
              <li>Sequelas de Apoplexia (AVC).</li>
              <li>
                Pediatria: alterações digestivas (cólicas, gases, obstipação),
                alterações no sono, agitação, febres; alterações respiratórias
                (tosse convulsa, bronquite, asma); conjuntivites, estenose ou
                bloqueio do ducto lacrimal.
              </li>
            </S.List>
          </S.Article>
        </S.DescriptionContainer>
      </S.Container>
      <S.NavBtnsContainer>
        <S.LinkAndIconContainer>
          <Link href="/ventosaterapia" passHref>
            <S.NavLink>
              <S.PrevIcon /> Anterior
            </S.NavLink>
          </Link>
        </S.LinkAndIconContainer>
        <S.LinkAndIconContainer>
          <Link href="/fitoterapia" passHref>
            <S.NavLink>
              Próxima <S.NextIcon />
            </S.NavLink>
          </Link>
        </S.LinkAndIconContainer>
      </S.NavBtnsContainer>
    </S.TheraSection>
  );
};

export default MassagemTuina;
