import "./globals.css";
import type { Metadata } from "next";
import { Jura } from "next/font/google";
import Logo from "@/components/logo";
import Menu from "@/components/menu";

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
      <body className={jura.className}>
        <div className="grid grid-cols-[6%_300px_1fr_6%] min-h-screen">
          <div className="grid grid-rows-[200px_1fr_80px]">
            <div className="justify-self-end">
              <div className="w-96 h-px absolute top-40 left-0 bg-gradient-to-r from-black via-black to-white" />
              <div className="w-px h-[30rem] bg-gradient-to-b from-black via-black to-white" />
              <div className="w-96 h-px absolute top-96 left-0 bg-gradient-to-r from-black via-black to-white" />
            </div>
            <div />
            <div className="justify-self-end">
              <div className="w-96 h-px absolute left-0 bg-gradient-to-r from-black via-black to-white" />
              <div className="w-px h-64 absolute bottom-0 bg-gradient-to-t from-black via-black to-white" />
            </div>
          </div>
          <div className="grid grid-rows-[190px_1fr_80px] pl-5">
            <Logo />
            <Menu />
            <div>bottom</div>
          </div>
          <div className="grid grid-rows-[1fr_80px]">
            <main className="text-3xl w-[34rem] relative left-[17%] pt-44">
              {children}
            </main>
            <div className="text-right">language</div>
          </div>
          <div>
            <div className="w-56 h-px absolute right-0 bottom-20 bg-gradient-to-l from-black via-black to-white" />
            <div className="w-px h-52 absolute bottom-0 bg-gradient-to-t from-black via-black to-white" />
          </div>
        </div>
      </body>
    </html>
  );
}
