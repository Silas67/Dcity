import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "@/components/assets/Images/Project.jpg";
import { BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { BsDot } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion";

const Project = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full mt-3 rounded-t-lg overflow-hidden p-12 rounded-tr-[50px]"
      style={{
        backgroundImage: "url(/Project.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center z-30 relative text-white flex-col items-center"
      >
        <h1 className="text-5xl font-semibold font-heading uppercase text-center max-sm:text-3xl ">
          The{" "}
          <span className="bg-primary px-3 text-white font-bold">
            1{","}000
          </span>{" "}
          Church Building Project
        </h1>

        <div className="flex items-center justify-between my-12 gap-8 max-sm:flex-col-reverse">
          <div className="w-full md:w-1/2 p-4 rounded-xl mx-[10px] border basis-1/2">
            <form className="space-y-4 ">
              <Dropdown Con={true} Bg={true} />

              <input
                type="text"
                name="email"
                placeholder="State"
                className="w-full p-3 border rounded-md bg-transparent placeholder:text-white"
              />
              <input
                type="text"
                name="company"
                placeholder="City"
                className="w-full p-3 border rounded-md bg-transparent placeholder:text-white"
              />

              <Dropdown Con={false} Bg={true} />

              <button className="w-full bg-transparent text-white p-3 rounded-md hover:bg-background hover:text-primary transition-all duration-500 font-semibold">
                Save
              </button>
            </form>
          </div>
          <div className="basis-1/2 text-center">
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative text-center"
            >
              <Image src={img} alt="/" />

              <div className="absolute w-full h-full inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 z-10 transition-all duration-500 flex items-center justify-center">
                {hovered && (
                  <button className="w-fit h-[40px] font-semibold font-heading text-sm border-[1px] border-white bg-primary rounded-xl hover:bg-white hover:text-primary hover:border-primary transition-all duration-500 ease-in-out px-2">
                    View Projects
                  </button>
                )}
              </div>
            </div>
            <div className="italic text-[13px] underline underline-offset-2 p-2">
              <Link href={"/"}>Click to view projects</Link>
            </div>
          </div>
        </div>

        <div className="w-[70%] border"></div>

        <div className="flex items-center justify-evenly flex-col">
          <div className="p-4 basis-1/2 text-center">
            <h1 className="font-semibold text-2xl pb-4">Account Numbers</h1>
            <div className="flex gap-8">
              <h1 className="text-sm">
                {" "}
                <span className="font-bold">Name:</span> 1000 CHURCH PROJECT
              </h1>
              <h1 className="text-sm text-nowrap">
                <span className="font-bold">Bank:</span> GTBANK
              </h1>
            </div>

            <h1 className="text-sm">
              <span className="font-bold">NGN:</span>0283265571
            </h1>
            <h1 className="text-sm">
              <span className="font-bold">USD:</span> 0283265588
            </h1>
            <h1 className="text-sm">
              <span className="font-bold">GBP:</span> 0283265595
            </h1>
            <h1 className="text-sm">
              <span className="font-bold">EUR:</span> 0283266389
            </h1>
            <h1 className="text-sm">
              <span className="font-bold">SORT CODE:</span> 058152405
            </h1>
            <h1 className="text-sm">
              <span className="font-bold">SWIFT CODE:</span> GTBINGLA
            </h1>
          </div>

          <div className="p-4 flex items-center">
            <p className="flex items-center text-sm">
              <BiPhone className="text-xl mr-1" />
              (+234)-8035508230,(+234)-8034954566
            </p>
            <BsDot />
            <p className="flex items-center text-sm">
              <CgMail className="text-xl mr-1" />
              projects@dominioncity.cc
            </p>
          </div>
        </div>
      </motion.div>

      <div className="absolute w-full h-full inset-0 bg-black bg-opacity-80 z-10"></div>
    </div>
  );
};

export default Project;
