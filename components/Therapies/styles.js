import styled from "styled-components";
import Image from "next/image";
import { GoPrimitiveDot } from "react-icons/go";

const styles = {
  TherapiesContainer: styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;
    scroll-margin-top: 7rem;
  `,
  Title: styled.h1`
    font-size: 3.5rem;
    color: #cc8076;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      font-size: 3rem;
    }
  `,
  SwiperContainer: styled.div`
    width: 100%;
    padding: 0 1.5rem;
    & .slick-slide > div {
      margin: 0.5rem 0.5rem;
    }
    & .slick-list {
      margin: 0 -10px;
    }
    & .slick-dots {
      bottom: -35px;
    }
    & .slick-dots li button:before {
      font-size: 10px;
    }
    & .slick-dots li button:before {
      color: #cc8076;
    }
    & .slick-dots li.slick-active button:before {
      opacity: 1;
      color: #cc8076;
    }
  `,
};

export default styles;
