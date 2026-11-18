import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";

const Navbar = ({ toggleMobileNav, iconIsOpen, setIconOpen, t }) => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <div className={styles.brandContainer}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo_maria.png"
              alt="Maria C. Moreira"
              fill
              sizes="5rem"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.nameContainer}>
            <span className={styles.firstName}>Maria</span>
            <span className={styles.lastName}>C. Moreira</span>
          </div>
        </div>
      </Link>
      <div className={styles.mobileIcon} onClick={toggleMobileNav}>
        <Hamburger toggled={iconIsOpen} toggle={setIconOpen} color="#925f5b" />
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItems}>
          <Link href="/#about" passHref legacyBehavior>
            <a className={styles.menuLink}>{t("common:navBar.aboutMe")}</a>
          </Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="/#therapies" passHref legacyBehavior>
            <a className={styles.menuLink}>{t("common:navBar.therapies")}</a>
          </Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="/#treatments" passHref legacyBehavior>
            <a className={styles.menuLink}>{t("common:navBar.treatments")}</a>
          </Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="/#contacts" passHref legacyBehavior>
            <a className={styles.menuLink}>{t("common:navBar.contacts")}</a>
          </Link>
        </li>
        <li className={styles.menuItems}>
          <ul style={{ display: "flex", padding: 0 }}>
            <li className={styles.menuItems}>
              <Link href={router.asPath} locale={router.locales[0]} passHref legacyBehavior>
                <a className={styles.menuLink}>
                  <Image
                    src="/pt_icon.svg"
                    alt="português"
                    width="22"
                    height="22"
                    unoptimized
                  />
                </a>
              </Link>
            </li>
            <span className={styles.iconDivider}>|</span>
            <li className={styles.menuItems}>
              <Link href={router.asPath} locale={router.locales[1]} passHref legacyBehavior>
                <a className={styles.menuLink}>
                  <Image
                    src="/en_icon.svg"
                    alt="inglês"
                    width="22"
                    height="22"
                    unoptimized
                  />
                </a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
