"use client";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/collage.jpg")',
        backgroundSize: "cover",
      }}
      className="relative w-full flex items-center justify-center h-[60vh] max-sm:h-[40vh] max-sm:flex-col"
    >
      <div className="w-full text-center z-20">
        <h1 className="text-6xl text-white font-semibold font-type">
          {" "}
          About Us{" "}
        </h1>
        <p className="text-gray-400 italic tracking-[0.5em] font-thin p-2">
          Rasing Leaders that transform Society
        </p>
        <div className="w-full flex items-center justify-center gap-32 pt-8 max-sm:gap-14">
          <button className="w-fit px-4 h-[40px] font-semibold font-heading text-sm bg-neutral-700 text-white rounded-lg hover:bg-primary transition-all duration-500 ease-in-out">
            <Link href={"/about"}>Our Faith</Link>
          </button>
          <button className="w-fit px-4 h-[40px] font-semibold font-heading text-sm bg-neutral-700 text-white rounded-lg hover:bg-primary transition-all duration-500 ease-in-out">
            <Link href={"/about"}>Our Core Values</Link>
          </button>
        </div>
      </div>

      <div className="absolute w-full h-full bg-black bg-opacity-80 z-10"></div>
    </div>
  );
};

export default Hero;
