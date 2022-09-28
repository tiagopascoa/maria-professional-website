import S from "./styles";
import Link from "next/link";
//Data
import { dieteticaImgs } from "../data/pages";
//Components
import PagesSlider from "../components/PagesSlider";

const Dietetica = () => {
  return (
    <S.TheraSection>
      <S.Title>Dietética</S.Title>
      <S.Container>
        <PagesSlider images={dieteticaImgs} />
        <S.DescriptionContainer>
          <S.Article>
            <S.SubTitle>Fitoterapia</S.SubTitle>
            <S.Text>
              Segundo a MTC, é através da digestão que é extraída a energia
              necessária ao bom funcionamento do corpo. Ao adequarmos os
              alimentos ao quadro de cada indivíduo vamos potenciar e melhorar
              esta produção energética corrigindo deficiências, excessos e
              bloqueios, melhorando a execução das funções dos orgãos internos.
            </S.Text>
          </S.Article>
          <S.Article>
            <S.Text>
              Não é apenas usada em quadros de obesidade ou anorexia mas também
              em casos que se veja necessidade de reeducação ou correcção
              alimentar de forma a melhorar a qualidade de vida e
              consequentemente a saúde do paciente.
            </S.Text>
          </S.Article>
          <S.Article>
            <S.Text>
              Segundo a Medicina Chinesa, cada orgão tem associado um sabor e
              cada alimento tem associado um ou mais sabores. Além dos sabores,
              cada alimento tem também associada uma natureza ou temperatura,
              esta não depende da temperatura física do alimento mas sim da
              que este provoca durante e após a sua digestão. Desta forma, para
              restabelecer o equilíbrio, são selecionados alimentos e formas de
              confecção mais adequados ao quadro para potenciar o mecanismo de
              regulação interna e consequentemente a saúde.
            </S.Text>
          </S.Article>
        </S.DescriptionContainer>
      </S.Container>
      <S.NavBtnsContainer>
        <S.LinkAndIconContainer>
          <Link href="/fitoterapia" passHref>
            <S.NavLink>
              <S.PrevIcon /> Anterior
            </S.NavLink>
          </Link>
        </S.LinkAndIconContainer>
      </S.NavBtnsContainer>
    </S.TheraSection>
  );
};

export default Dietetica;
