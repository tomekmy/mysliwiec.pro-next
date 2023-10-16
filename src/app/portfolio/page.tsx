"use client";

import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      key="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      portfolio
    </motion.div>
  );
};

export default Portfolio;
