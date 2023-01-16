import styled from "styled-components";

const styles = {
  FooterContainer: styled.section`
    background-color: #925f5b;
    width: 100%;
    height: 6rem;
    margin-top: 5rem;
  `,
  CopyContainer: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 2rem 1rem;
  `,
  CopyText: styled.span`
    text-align: center;
    color: #ffffff;
  `,
};

export default styles;
