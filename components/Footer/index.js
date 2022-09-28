import S from "./styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <S.FooterContainer>
    <S.CopyContainer>
        <S.CopyText>CopyRight © {currentYear} Maria C. Moreira.</S.CopyText>
        <S.CopyText>Todos os direitos reservados.</S.CopyText>
      </S.CopyContainer>
  </S.FooterContainer>;
};

export default Footer;
