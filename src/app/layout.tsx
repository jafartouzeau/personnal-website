import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/topbar/topbar";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
