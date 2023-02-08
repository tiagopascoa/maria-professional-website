import styled from "styled-components";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

const styles = {
  //Icons
  NextIcon: styled(MdOutlineNavigateNext)`
    color: ${({ treatment }) => (treatment ? "#cc8076" : "#925f5b")};
    
  `,
  PrevIcon: styled(MdOutlineNavigateBefore)`
    color: ${({ treatment }) => (treatment ? "#cc8076" : "#925f5b")};
  `,
  TheraSection: styled.section`
    min-height: calc(100vh - 19rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* align-items: flex-start; */
    gap: 2rem;
    margin-top: 1rem;
    padding: 0 1.5rem;
  `,
  BackAndTitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  `,
  Title: styled.h1`
    font-size: 3.5rem;
    color: ${({ treatment }) => (treatment ? "#925f5b" : "#cc8076")};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    @media (max-width: 768px) {
      font-size: 3rem;
    }
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  `,
  Container: styled.div`
    display: flex;
    width: 100%;
    gap: 3rem;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* gap: 3rem; */
    }
  `,
  /* DescriptionAndNavBtns: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `, */
  DescriptionContainer: styled.div`
    width: 100%;
    background-color: ${({ treatment }) => (treatment ? "#925f5b" : "#cc8076")};
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
      rgb(0 0 0 / 30%) 0px 1px 3px -1px;
    /* @media (max-width: 768px) {
       
    } */
  `,
  SubTitle: styled.h2`
    font-size: 1.5rem;
    color: #ffffff;
  `,
  SubTitle2: styled.h3`
    font-size: 1.35rem;
    color: #ffffff;
  `,
  Text: styled.p`
    font-size: 1rem;
    color: #ffffff;
    line-height: 24px;
  `,
  Article: styled.article`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,
  List: styled.ul`
    /* padding-top: 0.5rem; */
    color: #ffffff;
    line-height: 21px;
  `,
  NavBtnsContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  NavLink: styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ treatment }) => (treatment ? "#cc8076" : "#925f5b")};
    font-size: 1.2rem;
  `,
  LinkAndIconContainer: styled.div`
    border-bottom: ${({ treatment }) => (treatment ? "1px solid #cc8076" : "1px solid #925f5b")};;
    color: #925f5b;
  `,
};

export default styles;
