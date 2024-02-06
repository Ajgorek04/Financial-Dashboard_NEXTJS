import "./globals.css";
import { Layout } from "./components/Layout/Layout";

export const metadata = {
  title: "Financial Dashboard",
  description: "Financial Dashboard App NEXJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
