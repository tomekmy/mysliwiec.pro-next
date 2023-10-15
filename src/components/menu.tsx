"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <ul className="text-2xl hover:[&>li]:text-red-700 [&>li]:w-fit [&>li]:my-1.5">
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 5 }}
      >
        <Link href="/">START</Link>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 5 }}
      >
        <Link href="/about">O MNIE</Link>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 5 }}
      >
        <Link href="/portfolio">PORTFOLIO</Link>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 5 }}
      >
        <Link href="/contact">KONTAKT</Link>
      </motion.li>
    </ul>
  );
};

export default Menu;
