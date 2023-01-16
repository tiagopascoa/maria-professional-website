import styled from "styled-components";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const styles = {
  //icons
  RightArrow: styled(IoIosArrowDroprightCircle)`
    width: 2rem;
    height: 2rem;
    color: ${({ treatment }) => (treatment ? "#cc8076" : "#925f5b")};
    position: absolute;
    right: -35px;
    :hover {
      color: #cc8076;
    }
  `,
  LeftArrow: styled(IoIosArrowDropleftCircle)`
    width: 2rem;
    height: 2rem;
    color: ${({ treatment }) => (treatment ? "#cc8076" : "#925f5b")};
    position: absolute;
    left: -35px;
    :hover {
      color: #cc8076;
    }
  `,
  SwiperContainer: styled.div`
    width: 40%;
    padding: 0 2rem;
    & .slick-slide > div {
      /* margin: 0.5rem 0.5rem; */
    }
    & .slick-list {
      /*  margin: 0 -10px; */
    }
    & .slick-dots li {
      margin: 0;
    }
    & .slick-dots {
      /* bottom: -35px; */
    }
    & .slick-dots li button:before {
      /* font-size: 10px; */
    }
    & .slick-dots li button:before {
      color: ${({ treatment }) => (treatment ? "#cc8076" : "#925f5b")};
    }
    & .slick-dots li.slick-active button:before {
      opacity: 1;

      color: ${({ treatment }) => (treatment ? "#cc8076" : "#925f5b")};
    }
    @media (max-width: 768px) {
      width: 75%;
    }
    @media (max-width: 480px) {
      width: 100%;
    }
  `,

  ImageContainer: styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    cursor: grab;
  `,
};

export default styles;
