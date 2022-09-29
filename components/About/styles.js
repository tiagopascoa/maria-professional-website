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
  NameContainer: styled.div`
    grid-column: 1 / 3;
    /* background-color: #cc8076; */
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;
    /* grid-column: 1 / 4;
    flex-direction: row; */
    @media (max-width: 768px) {
      grid-column: 2 / 6;
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
    /* box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
      rgb(0 0 0 / 30%) 0px 1px 3px -1px; */
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
    /*  border-radius: 0.5rem; */
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
      /* bottom: 10px;
      right: 0px; */
    }
  `,
  LogoContainer: styled.div`
    /* grid-column: 1 / 3;
    grid-row: 3 / 5;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2; */
    position: relative;
    width: 90px;
    height: 90px;
    top: -0.5px;
    @media (max-width: 480px) {
      /* grid-column: 1 / 3; */
      /* grid-row: 3 / 5; */
      /* position: relative; */
      /* bottom: 10px;
      right: 0px; */
      width: 75px;
      height: 75px;
      top: 0px;
    }
  `,

  FirstName: styled.h1`
    /* font-family: LuloClean, sans-serif; */
    font-size: 3.5rem;
    color: #cc8076;
    padding-left: 1.7rem;
    @media (max-width: 768px) {
      font-size: 3rem;
      padding: 0;
    }
  `,
  LastName: styled.h1`
    /* font-family: LuloClean, sans-serif; */
    font-size: 2.5rem;
    color: #cc8076;
    @media (max-width: 768px) {
      font-size: 2.1rem;
    }
  `,
  AboutTitle: styled.h2`
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
    /* filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2)); */
  `,
};

export default styles;
