"use client";

import { Textillate } from "textillate-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      key="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
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
    </motion.div>
  );
};

export default Home;
