import React from "react";
//Styles
import S from "./styles";
import Link from "next/link";

const NavMobile = ({ toggleMobileNav, mobileNavisOpen, iconIsOpen, setIconOpen }) => {
    const handleClickIcon = () => {
        toggleMobileNav();
        setIconOpen(!iconIsOpen);
    }
  return (
    <S.MobileNavContainer isOpen={mobileNavisOpen}>
      <S.MobileNavMenu>
        <Link href="/#about" passHref>
          <S.MobileNavLink onClick={handleClickIcon}>Sobre mim</S.MobileNavLink>
        </Link>
        <Link href="/#therapies" passHref>
          <S.MobileNavLink onClick={handleClickIcon}>Terapias</S.MobileNavLink>
        </Link>
        <Link href="/#treatments" passHref>
          <S.MobileNavLink onClick={handleClickIcon}>
            Tratamentos
          </S.MobileNavLink>
        </Link>
        <Link href="/#contacts" passHref>
          <S.MobileNavLink onClick={handleClickIcon}>Contactos</S.MobileNavLink>
        </Link>
      </S.MobileNavMenu>
    </S.MobileNavContainer>
  );
};

export default NavMobile;
