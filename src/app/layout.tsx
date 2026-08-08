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
        <main>{children}</main>
      </body>
    </html>
  );
}
