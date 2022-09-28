import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const styles = {
  Navbar: styled.nav`
    height: 6rem;
    height: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: #ffffff;
  `,
  BrandContainer: styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  `,
  LogoContainer: styled.div`
    height: 100%;
    position: relative;
    width: 5rem;
  `,
  NameContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  FirstName: styled.span`
    font-family: "Trakya500", sans-serif;
    font-size: 1.7rem;
    color: #cc8076;
  `,
  LastName: styled.span`
    font-family: "Trakya500", sans-serif;
    font-size: 1rem;
    color: #cc8076;
  `,
  Menu: styled.ul`
    display: flex;
    gap: 2rem;
    @media screen and (max-width: 900px) {
      display: none;
    }
  `,
  MenuItems: styled.li`
    list-style: none;
  `,
  MenuLink: styled.a`
    font-size: 1.2rem;
    color: #925f5b;
    cursor: pointer;
    :hover {
      color: #cc8076;
    }
  `,
  MobileIcon: styled.div`
    display: none;
    z-index: 55;
    @media screen and (max-width: 900px) {
      display: block;
      position: absolute;
      right: 20px;
      font-size: 1.8rem;
      cursor: pointer;
      
    }
  `,
  HamburguerIcon: styled(FaBars)`
    color: #925f5b;
  `,
};

export default styles;
