import styles from "./styles.module.css";
import Image from "next/image";
import Slider from "react-slick";
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
    <section className={styles.treatmentsContainer} id="treatments">
      <h2 className={styles.title}>{t("home:treatments.treatmentsTitle")}</h2>
      <div className={styles.swiperContainer}>
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
                    fill
                    sizes="12rem"
                    style={{ objectFit: "contain" }}
                  />
                }
                t={t}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Treatments;
