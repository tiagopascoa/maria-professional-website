import S from "./styles";
import Image from "next/image";
//Swiper
import Slider from "react-slick";
//Components
import Card from "../Card";

const Treatments = ({ t }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <S.TreatmentsContainer id="treatments">
      <S.Title>{t("home:treatments.treatmentsTitle")}</S.Title>
      <S.SwiperContainer>
        <Slider {...settings}>
          {t(
            "home:treatments.treatmentsCardsInfo",
            {},
            { returnObjects: true }
          ).map((card) => {
            return (
              <Card
                key={card.id}
                title={card.title}
                path={card.path}
                image={
                  <Image
                    src={card.image}
                    alt={card.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                }
                t={t}
              />
            );
          })}
        </Slider>
      </S.SwiperContainer>
    </S.TreatmentsContainer>
  );
};

export default Treatments;
