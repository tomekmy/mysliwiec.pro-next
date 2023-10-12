import "./globals.css";
import type { Metadata } from "next";
import { Jura } from "next/font/google";

const jura = Jura({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomasz Myśliwiec - Front-end Developer",
  description:
    "Nazywam się Tomasz Myśliwiec i jestem Front-end Developerem. Zajmuję kodowaniem stron i aplikacji internetowych.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={jura.className}>{children}</body>
    </html>
  );
}
