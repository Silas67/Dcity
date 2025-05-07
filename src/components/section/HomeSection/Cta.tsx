import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "@/components/assets/Images/collage.jpg";
import img2 from "@/components/assets/Images/Join3.png";
import img3 from "@/components/assets/Images/collage1.jpg";

const Cta = () => {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center rounded-bl-[50px] rounded-tl-md rounded-b-lg overflow-hidden max-sm:h-[50vh]">
      <div className="absolute w-full h-full flex">
        <div>
          <Image src={img1} alt="/" className="object-cover w-full h-full" />
        </div>
        <div className="w-[500px] h-full">
          <Image
            src={img2}
            alt="/"
            className="object-cover w-full h-full object-top"
          />
        </div>
        <div>
          <Image src={img3} alt="/" className="object-cover w-full h-full" />
        </div>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.7 }}
        viewport={{ once: true }}
        className="text-white flex items-center justify-center flex-col gap-6 z-30"
      >
        <h1 className="text-6xl font-semibold font-heading text-center max-sm:text-4xl">
          Join us live this Sunday
        </h1>
        <button className="w-[90px] h-[40px] font-semibold font-heading text-sm border border-white rounded-xl hover:bg-white hover:text-primary transition-all duration-500 ease-in-out">
          Join Us
        </button>
      </motion.div>

      <div className="bg-black absolute top-0 left-0 z-10 w-full h-full bg-opacity-40"></div>
    </div>
  );
};

export default Cta;
