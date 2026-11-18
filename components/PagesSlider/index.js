import React from "react";
import S from "./styles";
import Slider from "react-slick";
import Image from "next/image";

const SlickArrowLeft = ({ currentSlide, slideCount, treatment, ...props }) => (
  <S.LeftArrow
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-disabled={currentSlide === 0 ? true : false}
    treatment={treatment}
  >
    Previous
  </S.LeftArrow>
);

const SlickArrowRight = ({ currentSlide, slideCount, treatment, ...props }) => (
  <S.RightArrow
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    treatment={treatment}
  >
    Next
  </S.RightArrow>
);

const PagesSlider = ({ images, treatment }) => {
  const settings = {
    /* lazyLoad: true, */
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    /* initialSlide: 0, */
    nextArrow: <SlickArrowRight treatment={treatment} />,
    prevArrow: <SlickArrowLeft treatment={treatment} />,
  };

  return (
    <S.SwiperContainer treatment={treatment}>
      <Slider {...settings}>
        {images.map((img) => (
          <div key={img.id}>
            <S.ImageContainer>
              <Image
                src={img.path}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
                /* placeholder="blur" */
              />
            </S.ImageContainer>
          </div>
        ))}
      </Slider>
    </S.SwiperContainer>
  );
};

export default PagesSlider;
