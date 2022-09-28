import S from "./styles";

const Layout = ({ children }) => {
  return (
    <S.Page>
      <S.PageLimits>{children}</S.PageLimits>
    </S.Page>
  );
};

export default Layout;
