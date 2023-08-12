import React from "react";
import { motion } from "framer-motion";
import { fade } from "../lib/motion";

const FormAndImage = ({ children, image, imageDesc }) => {
  return (
    <section className="w-full flex justify-center lg:justify-between items-center">
      <motion.div className="w-full lg:w-3/5 lg:pr-24" {...fade}>
        {children}
      </motion.div>
      <motion.div className="hidden lg:flex w-2/5" {...fade}>
        <div className="flex w-full justify-center relative">
          <img className="object-cover" src={image} alt={imageDesc} />
        </div>
      </motion.div>
    </section>
  );
};

export default FormAndImage;
