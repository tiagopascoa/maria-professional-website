import styled from "styled-components";
import Image from "next/image";

const styles = {
  AboutContainer: styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    scroll-margin-top: 7rem;
    @media (max-width: 768px) {
      margin-top: 3.5rem;
    }
  `,
  AboutGrid: styled.div`
    width: 70%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    @media (max-width: 768px) {
      width: 100%;
      padding: 0 1.5rem;
    }
  `,
  NameContainer: styled.h2`
    grid-column: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: 768px) {
      grid-column: 1 / 7;
      align-items: center;
      justify-content: center;
      padding-bottom: 1.5rem;
    }
  `,
  ImageContainer: styled.div`
    grid-column: 4 / 7;
    grid-row: 1 / 6;
    position: relative;
    z-index: 0;
    @media (max-width: 768px) {
      grid-column: 2 / 7;
      grid-row: 2 / 6;
      position: relative;
    }
  `,
  AboutTextContainer: styled.div`
    grid-column: 2 / 6;
    grid-row: 4 / 7;
    background-color: #925f5b;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    z-index: 1;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
      rgb(0 0 0 / 30%) 0px 1px 3px -1px;
    @media (max-width: 768px) {
      grid-column: 1 / 6;
    }
  `,
  LogoGridElement: styled.div`
    grid-column: 1 / 3;
    grid-row: 3 / 5;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    @media (max-width: 768px) {
      grid-column: 1 / 3;
      grid-row: 3 / 5;
      position: relative;
    }
  `,
  LogoContainer: styled.div`
    position: relative;
    width: 90px;
    height: 90px;
    top: -0.5px;
    @media (max-width: 480px) {
      width: 75px;
      height: 75px;
      top: 0px;
    }
  `,

  FirstName: styled.span`
    font-size: 3.5rem;
    color: #cc8076;
    padding-left: 0.85rem;
    @media (max-width: 768px) {
      font-size: 3rem;
      padding: 0;
    }
  `,
  LastName: styled.span`
    font-size: 2.2rem;
    color: #cc8076;
  `,
  AboutTitle: styled.h3`
    font-size: 2rem;
    color: #ffffff;
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
    @media (max-width: 480px) {
      padding-bottom: 0;
      padding-top: 1rem;
    }
  `,
  Text: styled.p`
    font-size: 1rem;
    color: #ffffff;
  `,
  StyledImage: styled(Image)`
  `,
};

export default styles;
