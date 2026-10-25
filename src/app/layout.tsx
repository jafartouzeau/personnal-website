import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu/menu";


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
