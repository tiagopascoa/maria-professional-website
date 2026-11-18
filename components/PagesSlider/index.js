import React from "react";
import styles from "./styles.module.css";
import Slider from "react-slick";
import Image from "next/image";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

const SlickArrowLeft = ({ currentSlide, slideCount, treatment, ...props }) => (
  <IoIosArrowDropleftCircle
    {...props}
    className={`slick-prev slick-arrow${
      currentSlide === 0 ? " slick-disabled" : ""
    } ${styles.leftArrow}${treatment ? ` ${styles.arrowTreatment}` : ""}`}
    aria-disabled={currentSlide === 0 ? true : false}
  >
    Previous
  </IoIosArrowDropleftCircle>
);

const SlickArrowRight = ({ currentSlide, slideCount, treatment, ...props }) => (
  <IoIosArrowDroprightCircle
    {...props}
    className={`slick-next slick-arrow${
      currentSlide === slideCount - 1 ? " slick-disabled" : ""
    } ${styles.rightArrow}${treatment ? ` ${styles.arrowTreatment}` : ""}`}
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
  >
    Next
  </IoIosArrowDroprightCircle>
);

const PagesSlider = ({ images, treatment }) => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlickArrowRight treatment={treatment} />,
    prevArrow: <SlickArrowLeft treatment={treatment} />,
  };
  const sliderClassName = `${styles.swiperContainer}${
    treatment ? ` ${styles.sliderTreatment}` : ""
  }`;

  return (
    <div className={sliderClassName}>
      <Slider {...settings}>
        {images.map((img) => (
          <div key={img.id}>
            <div className={styles.imageContainer}>
              <Image
                src={img.path}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PagesSlider;
