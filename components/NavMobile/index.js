import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
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
  const mobileNavClassName = `${styles.mobileNavContainer}${
    mobileNavisOpen ? ` ${styles.mobileNavContainerOpen}` : ""
  }`;

  return (
    <aside className={mobileNavClassName}>
      <div className={styles.mobileNavMenu}>
        <Link href="/#about" passHref legacyBehavior>
          <a className={styles.mobileNavLink} onClick={handleClickIcon}>
            {t("common:navBar.aboutMe")}
          </a>
        </Link>
        <Link href="/#therapies" passHref legacyBehavior>
          <a className={styles.mobileNavLink} onClick={handleClickIcon}>
            {t("common:navBar.therapies")}
          </a>
        </Link>
        <Link href="/#treatments" passHref legacyBehavior>
          <a className={styles.mobileNavLink} onClick={handleClickIcon}>
            {t("common:navBar.treatments")}
          </a>
        </Link>
        <Link href="/#contacts" passHref legacyBehavior>
          <a className={styles.mobileNavLink} onClick={handleClickIcon}>
            {t("common:navBar.contacts")}
          </a>
        </Link>
        <div style={{ display: "flex", padding: 0 }}>
          <Link href={router.asPath} locale={router.locales[0]} passHref legacyBehavior>
            <a className={styles.mobileNavLink}>
              <Image
                src="/pt_icon.svg"
                alt="português"
                width="30"
                height="30"
                unoptimized
              />
            </a>
          </Link>
          <span className={styles.iconDivider}>|</span>
          <Link href={router.asPath} locale={router.locales[1]} passHref legacyBehavior>
            <a className={styles.mobileNavLink}>
              <Image
                src="/en_icon.svg"
                alt="inglês"
                width="30"
                height="30"
                unoptimized
              />
            </a>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default NavMobile;
