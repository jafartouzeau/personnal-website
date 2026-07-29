import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/topbar/topbar";
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
        <TopBar/>
        <SideMenu/>
        <main>{children}</main>
      </body>
    </html>
  );
}
