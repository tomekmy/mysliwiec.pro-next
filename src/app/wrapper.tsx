"use client";

import { useState, type ReactNode } from "react";
import Logo from "@/components/logo";
import Menu from "@/components/menu";
import { AnimatePresence } from "framer-motion";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
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
          <AnimatePresence>{children}</AnimatePresence>
        </main>
        <div className="text-right">language</div>
      </div>
      <div>
        <div className="w-56 h-px absolute right-0 bottom-20 bg-gradient-to-l from-black via-black to-white" />
        <div className="w-px h-52 absolute bottom-0 bg-gradient-to-t from-black via-black to-white" />
      </div>
    </div>
  );
};

export default Wrapper;
