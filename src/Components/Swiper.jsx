import React from "react";
import { motion } from "framer-motion";

function Swiper() {
  return (
    <motion.div className="Swiper">
      <motion.div className="Carousel">
        <motion.div className="InnerCarousel"></motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Swiper;
