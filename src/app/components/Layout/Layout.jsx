"use client";
import styles from "./Layout.module.css";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainContent } from "../MainContent/MainContent";
import { Nav } from "../Nav/Nav";
import { useState } from "react";

export function Layout({ children }) {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className={styles.MainContentWrapper}>
      <Nav
        isNavVisible={isNavVisible}
        toggleNavVisibility={toggleNavVisibility}
      />
      <MainContent>
        <Header toggleNavVisibility={toggleNavVisibility} />
        {children}
        <Footer />
      </MainContent>
    </div>
  );
}
