import React from "react";
import S from "./styles";
import Slider from "react-slick";
import Image from "next/image";

const PagesSlider = ({ images }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <S.LeftArrow
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      Previous
    </S.LeftArrow>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <S.RightArrow
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      Next
    </S.RightArrow>
  );
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
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
  };

  return (
    <S.SwiperContainer>
      <Slider {...settings}>
        {images.map((img) => (
          <div key={img.id}>
            <S.ImageContainer>
              <Image
                src={img.path}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
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
