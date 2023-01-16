import React from "react";
import S from "./styles";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";

const Navbar = ({ toggleMobileNav, iconIsOpen, setIconOpen, t }) => {
  const router = useRouter();

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
            />
          </S.LogoContainer>
          <S.NameContainer>
            <S.FirstName>Maria</S.FirstName>
            <S.LastName>C. Moreira</S.LastName>
          </S.NameContainer>
        </S.BrandContainer>
      </Link>
      <S.MobileIcon onClick={toggleMobileNav}>
        <Hamburger toggled={iconIsOpen} toggle={setIconOpen} color="#925f5b" />
      </S.MobileIcon>
      <S.Menu>
        <S.MenuItems>
          <Link href="/#about" passHref>
            <S.MenuLink>{t("common:navBar.aboutMe")}</S.MenuLink>
          </Link>
        </S.MenuItems>
        <S.MenuItems>
          <Link href="/#therapies" passHref>
            <S.MenuLink>{t("common:navBar.therapies")}</S.MenuLink>
          </Link>
        </S.MenuItems>
        <S.MenuItems>
          <Link href="/#treatments" passHref>
            <S.MenuLink>{t("common:navBar.treatments")}</S.MenuLink>
          </Link>
        </S.MenuItems>
        <S.MenuItems>
          <Link href="/#contacts" passHref>
            <S.MenuLink>{t("common:navBar.contacts")}</S.MenuLink>
          </Link>
        </S.MenuItems>
        <S.MenuItems>
          <ul style={{ display: "flex", padding: 0 }}>
            <S.MenuItems>
              <Link href={router.asPath} locale={router.locales[0]}>
                <S.MenuLink>
                  <Image
                    src="/pt_icon.svg"
                    alt="português"
                    width="22"
                    height="22"
                  />
                </S.MenuLink>
              </Link>
            </S.MenuItems>
            <S.IconDivider>|</S.IconDivider>
            <S.MenuItems>
              <Link href={router.asPath} locale={router.locales[1]}>
                <S.MenuLink>
                  <Image
                    src="/en_icon.svg"
                    alt="inglês"
                    width="22"
                    height="22"
                  />
                </S.MenuLink>
              </Link>
            </S.MenuItems>
          </ul>
        </S.MenuItems>
      </S.Menu>
    </S.Navbar>
  );
};

export default Navbar;
