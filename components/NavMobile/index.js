import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
//Styles
import S from "./styles";
import Link from "next/link";

const NavMobile = ({
  toggleMobileNav,
  mobileNavisOpen,
  iconIsOpen,
  setIconOpen,
  t,
}) => {
  const router = useRouter();
  const handleClickIcon = () => {
    toggleMobileNav();
    setIconOpen(!iconIsOpen);
  };
  return (
    <S.MobileNavContainer isOpen={mobileNavisOpen}>
      <S.MobileNavMenu>
        <Link href="/#about" passHref legacyBehavior>
          <S.MobileNavLink onClick={handleClickIcon}>
            {t("common:navBar.aboutMe")}
          </S.MobileNavLink>
        </Link>
        <Link href="/#therapies" passHref legacyBehavior>
          <S.MobileNavLink onClick={handleClickIcon}>
            {t("common:navBar.therapies")}
          </S.MobileNavLink>
        </Link>
        <Link href="/#treatments" passHref legacyBehavior>
          <S.MobileNavLink onClick={handleClickIcon}>
            {t("common:navBar.treatments")}
          </S.MobileNavLink>
        </Link>
        <Link href="/#contacts" passHref legacyBehavior>
          <S.MobileNavLink onClick={handleClickIcon}>
            {t("common:navBar.contacts")}
          </S.MobileNavLink>
        </Link>
        <div style={{ display: "flex", padding: 0 }}>
          <Link href={router.asPath} locale={router.locales[0]} passHref legacyBehavior>
            <S.MobileNavLink>
              <Image
                src="/pt_icon.svg"
                alt="português"
                width="30"
                height="30"
                unoptimized
              />
            </S.MobileNavLink>
          </Link>
          <S.IconDivider>|</S.IconDivider>
          <Link href={router.asPath} locale={router.locales[1]} passHref legacyBehavior>
            <S.MobileNavLink>
              <Image
                src="/en_icon.svg"
                alt="inglês"
                width="30"
                height="30"
                unoptimized
              />
            </S.MobileNavLink>
          </Link>
        </div>
      </S.MobileNavMenu>
    </S.MobileNavContainer>
  );
};

export default NavMobile;
