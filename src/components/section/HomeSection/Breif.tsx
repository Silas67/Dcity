import React from "react";
import Image from "next/image";
import img1 from "@/components/assets/Images/Breif.png";
import Link from "next/link";
import Motion from "@/hooks/Motion";

const Breif = () => {
  return (
    <div className=" relative w-full flex justify-around items-center py-8 md:px-16 px-8 max-sm:flex-col-reverse gap-8 ">
      <Motion className="w-[50%] flex flex-col max-sm:w-full">
        <div className="text-primary uppercase text-7xl tracking-tighter font-bold max-sm:text-[2rem] font-heading pb-4">
          Welcome Home
        </div>

        <div className="text-lg max-sm:text-sm ">
          At Dominion City, we help you discover purpose, develop & deploy your
          potentials towards societal transformation. We incubate you with the
          tools and resources to unlock and revolutionize your world.
        </div>

        <div>
          <button className="secondary-button rounded-2xl flex mt-4 justify-center items-center ">
            {" "}
            <Link className="text-[10px]" href="/contact">
              Learn More{" "}
            </Link>
          </button>
        </div>
      </Motion>

      {/* Image */}
      <div className="w-[40%] h-full md:rounded-tl-[70%] md:scale-[0.9] md:rounded-br-[10%] rounded-3xl  overflow-hidden max-sm:w-full z-20">
        <Image
          src={img1}
          alt="/"
          className="object-cover w-full h-full"
          width={400}
        />
      </div>

      {/* Patterns */}
      <div
        style={{
          backgroundImage: 'url("/pattern2.png")',
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
        className="absolute w-[70%] h-[150px]  rounded-b-full right-[0rem] top-[0rem] z-10"
      ></div>
    </div>
  );
};

export default Breif;
