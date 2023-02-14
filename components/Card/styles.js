import styled from "styled-components";

const styles = {
  Card: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
   /*  width: 14rem; */
    height: 17.5rem;
    background-color: ${(props) =>
      props.therapiestyles ? "#e6bbb5" : "#cc8076"};
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
      rgb(0 0 0 / 30%) 0px 1px 3px -1px;
    @media screen and (max-width: 480px) {
      height: 17rem;
    }
    /* border-radius: 0.5rem; */
  `,

  Title: styled.h3`
    color: #ffffff;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 20%;
  `,
  ImageContainer: styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
  Button: styled.a`
    /*   */
    cursor: pointer;
    background-color: ${(props) =>
      props.therapiestyles ? "#cc8076" : "#925f5b"};
    color: #ffffff;
    padding: 0.6rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    /* font-family: LuloClean, sans-serif; */
    transition: all 0.3s ease-in-out;
    outline: none;
    border: none;
    :hover {
      background-color: ${(props) =>
        props.therapiestyles ? "#925f5b" : "#e6bbb5"};
    }
    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 385px) {
      padding: 0.5rem 1rem;
    }
  `,
};

export default styles;
