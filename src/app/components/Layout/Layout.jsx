import styles from "./Layout.module.css";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainContent } from "../MainContent/MainContent";
import { Nav } from "../Nav/Nav";

export function Layout({ children }) {
  return (
    <div className={styles.MainContentWrapper}>
      <Nav />
      <MainContent>
        <Header />
        {children}
        <Footer />
      </MainContent>
    </div>
  );
}
