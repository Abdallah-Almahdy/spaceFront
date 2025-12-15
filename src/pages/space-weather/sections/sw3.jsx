import React from "react";
import { motion } from "framer-motion";

const Sw3 = () => {
  return (
    <section className="px-10 md:px-24 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-[#FEBC2F] mb-6"
      >
        Solar Activity Monitoring
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
      >
        Observing solar flares, coronal mass ejections, and sunspot activity
        to predict geomagnetic effects on Earth.
      </motion.p>
    </section>
  );
};

export default Sw3;
