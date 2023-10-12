"use client";

import Link from "next/link";
import { Textillate } from "textillate-react";

const Home = () => {
  return (
    <main className="grid grid-cols-[6%_300px_1fr_6%] min-h-screen">
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
        <div className="pt-3">
          <h1 className="text-5xl group">
            <Link href="/">
              <span className="group-hover:text-red-700">T</span>omasz{" "}
              <span className="group-hover:text-red-700">M</span>yśliwiec
            </Link>
          </h1>
          <h2 className="text-lg pt-2">
            {typeof window !== "undefined" && (
              <Textillate option={{ in: { effect: "fadeInLeftBig" } }}>
                Front-End Developer
              </Textillate>
            )}
          </h2>
        </div>
        <ul className="text-2xl hover:[&>li]:text-red-700 [&>li]:w-fit [&>li]:my-1.5">
          <li>
            <Link href="/">START</Link>
          </li>
          <li>
            <Link href="/about">O MNIE</Link>
          </li>
          <li>
            <Link href="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link href="/contact">KONTAKT</Link>
          </li>
        </ul>
        <div>bottom</div>
      </div>
      <div className="grid grid-rows-[1fr_80px]">
        <div className="text-3xl w-[34rem] relative left-[17%] pt-44">
          {typeof window !== "undefined" && (
            <>
              <p className="pb-3">
                <Textillate
                  option={{
                    in: {
                      effect: "bounceIn",
                      delay: 30,
                    },
                    out: {
                      effect: "hinge",
                      delay: 40,
                      shuffle: true,
                      sync: false,
                      delayScale: 7,
                    },
                  }}
                >
                  Witaj.
                </Textillate>
              </p>
              <p className="pb-3">
                <Textillate
                  option={{
                    initialDelay: 250,
                    in: {
                      effect: "bounceIn",
                      delay: 30,
                    },
                    out: {
                      effect: "hinge",
                      delay: 15,
                      shuffle: true,
                      sync: false,
                      delayScale: 2,
                    },
                  }}
                >
                  Jestem Front-End Developerem.
                </Textillate>
              </p>
              <p>
                <Textillate
                  option={{
                    initialDelay: 900,
                    in: {
                      effect: "bounceIn",
                      delay: 30,
                    },
                    out: {
                      effect: "hinge",
                      delay: 15,
                      shuffle: true,
                      sync: false,
                      delayScale: 2,
                    },
                  }}
                >
                  Zajmuję się kodowaniem stron i aplikacji internetowych.
                </Textillate>
              </p>
            </>
          )}
        </div>
        <div className="text-right">language</div>
      </div>
      <div>
        <div className="w-56 h-px absolute right-0 bottom-20 bg-gradient-to-l from-black via-black to-white" />
        <div className="w-px h-52 absolute bottom-0 bg-gradient-to-t from-black via-black to-white" />
      </div>
    </main>
  );
};

export default Home;
