import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer";


export const metadata: Metadata = {
  title: "JⱯFⱯR",
  description: "Site personnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="mainContainer">
          <Menu/>
          <main>
            {children}
          </main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
