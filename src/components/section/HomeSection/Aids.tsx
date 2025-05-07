import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img from "@/components/assets/Images/testimony.png";
import Dropdown from "./Dropdown";

const Aids = () => {
  const [category, setCategory] = useState("");
  return (
    <div className="w-full flex items-center justify-center p-10 entbody flex-col">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center "
      >
        <h1 className="font-semibold text-4xl font-heading mt-4">
          Have A Prayer Request Or Testimony?
        </h1>
        <p className="text-gray-600 italic text-sm p-2">
          {" "}
          Send us a message. Let us pray and rejoice with you
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full mx-[10px] my-8 flex items-center justify-center gap-5 max-sm:flex-col-reverse"
      >
        <div className="w-1/2 max-sm:w-full">
          <Image src={img} alt="/" />
        </div>

        <div className="space-y-4 bg-primary p-8 rounded-xl  max-sm:p-6">
          <form className="space-y-4">
            <div className="mb-4 text-white flex items-center gap-5">
              <p className="text-sm font-semibold">Select Category: </p>
              <div className="flex gap-4 max-sm:flex-col">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="testimony"
                    className="hidden"
                    onChange={() => setCategory("testimony")}
                  />
                  <div
                    className={`w-5 h-5 border-2 border-white rounded-full flex items-center justify-center ${
                      category === "testimony" ? "bg-white" : ""
                    }`}
                  >
                    {category === "testimony" && (
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="ml-2 max-sm:text-sm">Testimony</span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="prayer"
                    className="hidden"
                    onChange={() => setCategory("prayer")}
                  />
                  <div
                    className={`w-5 h-5 border-2 border-white rounded-full flex items-center justify-center ${
                      category === "prayer" ? "bg-white" : ""
                    }`}
                  >
                    {category === "prayer" && (
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="ml-2 max-sm:text-sm">Prayer Request</span>
                </label>
              </div>
            </div>

            <input
              type="text"
              name="company"
              placeholder="Full Name"
              className="w-full p-3 border rounded-md bg-white placeholder:text-primary"
            />
            <Dropdown Con={true} Bg={false} />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md bg-white placeholder:text-primary"
            />
            <input
              type="tel"
              name="contact"
              placeholder="Contact(Mobile)"
              className="w-full p-3 border rounded-md bg-white placeholder:text-primary"
            />
            <div>
              <textarea
                className="w-full px-4 py-2 mt-1 border rounded-md text-primary h-32 placeholder:text-primary"
                placeholder="Type a message..."
              ></textarea>
            </div>

            {category === "testimony" && (
              <div>
                <input
                  type="file"
                  className="w-full px-4 py-2 mt-1 border rounded-md bg-white text-primary"
                />
                <p className="text-xs mt-1 text-white">
                  Upload image, pdf or 1-minute video of your testimony (e.g.,
                  Before and After, Doctors report, etc.)
                </p>
              </div>
            )}

            <button className="w-full bg-primary text-white p-3 rounded-md hover:bg-background hover:text-primary transition-all duration-500 font-semibold">
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Aids;
