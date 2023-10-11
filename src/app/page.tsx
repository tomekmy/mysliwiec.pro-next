"use client";

import { Textillate } from 'textillate-react';

const Home = () => {
  return (
    <main
      className="grid grid-cols-[6%_300px_1fr_6%] min-h-screen">
      <div
        className="grid grid-rows-[200px_1fr_80px]">
        <div>left</div>
        <div>left</div>
        <div>left</div>
      </div>
      <div
        className="grid grid-rows-[200px_1fr_80px] pl-2.5">
        <div
          className="pt-3">
          <h1
            className="text-4xl">Tomasz Myśliwiec</h1>
          <h2
            className="text-lg">Front-End Developer</h2>
        </div>
        <ul>
          <li>START</li>
          <li>O MNIE</li>
          <li>PORTFOLIO</li>
          <li>KONTAKT</li>
        </ul>
        <div>bottom</div>
      </div>
      <div
        className="grid grid-rows-[1fr_80px]">
        <Textillate
          className="text-2xl"
          option={{
            in: { effect:'fadeInRight', shuffle:true },
          }}
        >
          Witaj.
          Jestem Front-End Developerem.
          Zajmuję się kodowaniem stron i aplikacji internetowych.
        </Textillate>
        <div
          className="text-right">language</div>
      </div>
      <div>right</div>
    </main>
  );
};

export default Home;
