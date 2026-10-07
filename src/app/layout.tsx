import type { Metadata } from "next";
import "./globals.css";
import SideMenu from "@/components/side-menu/side-menu";
import Logo from "@/components/logo/logo";


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
        <Logo/>
        <div className="mainContainer">
          <SideMenu/>
          <main>
            {children}
          </main>
        </div>
        <footer style={{
            writingMode: "vertical-rl",
            textOrientation:"sideways", 
            position:"fixed",
            bottom:"0",
            fontSize: "9px",
            textAlign: "center",
            margin: "0 1px 5px 0"
        }}>©2026 Jafar Touzeau</footer>
      </body>
    </html>
  );
}
