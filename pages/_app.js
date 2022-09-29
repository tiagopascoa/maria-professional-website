import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import NavMobile from "../components/NavMobile";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [mobileNavisOpen, setMobileNavisOpen] = React.useState(false);
  const [iconIsOpen, setIconOpen] = React.useState(false);

  const toggleMobileNav = () => {
    setMobileNavisOpen(!mobileNavisOpen);
  };
  return (
    <>
      <Layout>
        <Navbar toggleMobileNav={toggleMobileNav} iconIsOpen={iconIsOpen} setIconOpen={setIconOpen}/>
        <NavMobile toggleMobileNav={toggleMobileNav} mobileNavisOpen={mobileNavisOpen} iconIsOpen={iconIsOpen} setIconOpen={setIconOpen}/>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}

export default MyApp;
