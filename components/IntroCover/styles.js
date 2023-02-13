import styled from "styled-components";
import Image from "next/image";
import { GoPrimitiveDot } from "react-icons/go";

const styles = {
  CoverContainer: styled.section`
    min-height: calc(80vh - 7rem);
    position: relative;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 480px) {
      min-height: calc(80vh - 7rem);
    }
  `,
  StyledNextImage: styled(Image)`
    z-index: 0;
  `,
  TopContainer: styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
    z-index: 1;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex: 1;
    padding: 1.5rem;
    @media screen and (max-height: 700px) {
      gap: 2rem;
    }

  `,
  TitleContainer: styled.div`
    display: flex;
    gap: 0.5rem;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 0;
    }
  `,
  Title: styled.h1`
    /* font-family: LuloClean, sans-serif; */
    font-size: 4rem;
    /* font-weight: 800; */
    text-align: center;
    color: ${(props) => (props.secondtitle ? "#925f5b" : "#FFFFFF")};
    @media screen and (max-width: 768px) {
      font-size: 3.5rem;
    }
  `,
  SecondTitle: styled.span`
    color: #925f5b;
  `,
  SubTitleContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
   /*  max-width: 75%; */
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  `,
  DotAndSubtitleContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,
  SubTitle: styled.h2`
    font-size: 1.2rem;
    color: #ffffff;
    text-align: center;
    /* font-family: 'Caveat', cursive; */
    @media screen and (max-width: 345px) {
      font-size: 1rem;
    }
  `,
  DotIcon: styled(GoPrimitiveDot)`
    color: #ffffff;
  `,
  Button: styled.a`
    cursor: pointer;
    background-color: #925f5b;
    color: #ffffff;
    padding: 0.6rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;
    outline: none;
    border: none;
    :hover {
      background-color: #cc8076;
    }
  `,
};

export default styles;
