import S from "../styles/pageStyles";
import Link from "next/link";

export default function Custom404() {
  return (
    <S.NoPageContainer>
      <h1>404 - Pedimos desculpa mas não encontramos esta página.</h1>
      <Link href="/">Voltar à página principal.</Link>
    </S.NoPageContainer>
  );
}
