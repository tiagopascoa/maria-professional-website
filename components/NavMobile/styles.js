import styled from "styled-components";

const styles = {
  MobileNavContainer: styled.aside`
    position: fixed;
    z-index: 49;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background: #ffffff;
    transition: 0ms.1s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  `,

  MobileNavMenu: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  `,
  MobileNavLink: styled.a`
    color: #925f5b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  `,
  MobileNaveItem: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
      color: #000000;
      transform: 0.2s ease-in-out;
    }
  `,
};

export default styles;
