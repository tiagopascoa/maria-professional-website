import React from "react";
import S from "./styles";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";

const Navbar = ({ toggleMobileNav, iconIsOpen, setIconOpen }) => {
  
  return (
    <S.Navbar>
      <Link href="/">
        <S.BrandContainer>
          <S.LogoContainer>
            <Image
              src="/logo_maria.png"
              alt="Maria C. Moreira"
              width="100%"
              height="100%"
              /* objectFit="contain" */
            />
          </S.LogoContainer>
          <S.NameContainer>
            <S.FirstName>Maria</S.FirstName>
            <S.LastName>C. Moreira</S.LastName>
          </S.NameContainer>
        </S.BrandContainer>
      </Link>
      <S.MobileIcon onClick={toggleMobileNav}>
        {/* <S.HamburguerIcon /> */}
        <Hamburger
          toggled={iconIsOpen}
          toggle={setIconOpen}
          color="#925f5b"
        />
      </S.MobileIcon>
      <S.Menu>
        <S.MenuItems>
          <Link href="/#about" passHref>
            <S.MenuLink>Sobre mim</S.MenuLink>
            {/* <S.MenuLink>Maria C. Moreira</S.MenuLink> */}
          </Link>
        </S.MenuItems>
        <S.MenuItems>
          <Link href="/#therapies" passHref>
            <S.MenuLink>Terapias</S.MenuLink>
          </Link>
        </S.MenuItems>
        <S.MenuItems>
          <Link href="/#treatments" passHref>
            <S.MenuLink>Tratamentos</S.MenuLink>
          </Link>
        </S.MenuItems>
        {/* <S.MenuItems>
            <Link href="/">
              <S.MenuLink>Marcações</S.MenuLink>
            </Link>
          </S.MenuItems> */}
        <S.MenuItems>
          <Link href="/#contacts" passHref>
            <S.MenuLink>Contactos</S.MenuLink>
          </Link>
        </S.MenuItems>
      </S.Menu>
    </S.Navbar>
  );
};

export default Navbar;
