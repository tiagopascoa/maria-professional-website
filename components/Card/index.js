import Link from "next/link";
import S from "./styles";

const Card = ({ therapiestyles, title, image, path, t }) => {
  /* console.log('path: ', path) */
  return (
    <S.Card therapiestyles={therapiestyles}>
      <S.Title>{title}</S.Title>
      <S.ImageContainer>{image}</S.ImageContainer>
      <Link href={path} passHref>
        <S.Button therapiestyles={therapiestyles}>
          {t("common:knowMoreBtn")}
        </S.Button>
      </Link>
    </S.Card>
  );
};

export default Card;
