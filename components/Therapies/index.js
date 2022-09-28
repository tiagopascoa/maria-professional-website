import S from "./styles";
import Image from "next/image";
//Swiper
import Slider from "react-slick";
//Data
import { therapiesCardsInfo } from "../../data/cards";
//Components
import Card from "../Card";

const Therapies = () => {
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
    <S.TherapiesContainer id="therapies">
      <S.Title>Terapias</S.Title>
      <S.SwiperContainer>
        <Slider {...settings}>
          {therapiesCardsInfo.map((card) => {
            return (
              <Card
                therapiestyles={+true}
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
              />
            );
          })}
        </Slider>
      </S.SwiperContainer>
    </S.TherapiesContainer>
  );
};

export default Therapies;
