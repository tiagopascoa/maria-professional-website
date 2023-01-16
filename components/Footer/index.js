import S from "./styles";

const Footer = ({ t }) => {
  const currentYear = new Date().getFullYear();
  return (
    <S.FooterContainer>
      <S.CopyContainer>
        <S.CopyText>CopyRight © {currentYear} Maria C. Moreira.</S.CopyText>
        <S.CopyText> {t("common:footer.allRightsReserved")}</S.CopyText>
      </S.CopyContainer>
    </S.FooterContainer>
  );
};

export default Footer;
