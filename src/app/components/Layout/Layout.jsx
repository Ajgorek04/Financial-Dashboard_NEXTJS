import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainContent } from "../MainContent/MainContent";

export function Layout({ children }) {
  return (
    <>
      <MainContent>
        <Header />
        {children}
        <Footer />
      </MainContent>
    </>
  );
}
