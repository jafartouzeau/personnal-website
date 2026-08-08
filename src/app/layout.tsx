import type { Metadata } from "next";
import "./globals.css";
import SideMenu from "@/components/side-menu/side-menu";


export const metadata: Metadata = {
  title: "Jafar Touzeau",
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
        <SideMenu/>
        <main>
          {children}
        </main>
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
