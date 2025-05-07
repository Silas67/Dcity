import React from "react";
import Image from "next/image";
import img1 from "@/components/assets/Images/Breif.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Breif = () => {
  return (
    <div className="w-full flex justify-evenly items-center py-8 px-16 max-sm:flex-col-reverse max-sm:gap-8 entbody ">
      <div className="w-1/2 gap-4 flex flex-col max-sm:w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.7 }}
          viewport={{ once: true }}
          className="text-primary uppercase text-[4rem] tracking-tighter transform inline-block scale-y-[1.2] origin-top font-bold max-sm:text-[2rem] font-type"
        >
          Welcome Home
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg max-sm:text-sm font-heading "
        >
          At Dominion City, we help you discover purpose, develop & deploy your
          potentials towards societal transformation. We incubate you with the
          tools and resources to unlock and revolutionize your world.
        </motion.div>
        <div>
          <button className="secondary-button  rounded-2xl flex flex-row gap-1 justify-center items-center ">
            {" "}
            <Link className="text-[10px]" href="/contact">
              Learn More{" "}
            </Link>
          </button>
        </div>
      </div>
      <div className="border bb rounded-xl overflow-hidden">
        <Image src={img1} alt="/" className="object-cover" width={400} />
      </div>
    </div>
  );
};

export default Breif;
