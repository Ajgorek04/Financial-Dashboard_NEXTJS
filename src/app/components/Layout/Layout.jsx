"use client";
import styles from "./Layout.module.css";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainContent } from "../MainContent/MainContent";
import { Nav } from "../Nav/Nav";
import { useEffect, useState } from "react";

export function Layout({ children }) {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsNavVisible(window.innerWidth > 1200);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.MainContentWrapper}>
      <Nav
        isNavVisible={isNavVisible}
        toggleNav={() => setIsNavVisible(!isNavVisible)}
      />
      <MainContent>
        <Header toggleNav={() => setIsNavVisible(!isNavVisible)} />
        {children}
        <Footer />
      </MainContent>
    </div>
  );
}
