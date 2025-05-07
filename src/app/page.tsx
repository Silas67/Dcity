"use client";
// import { useEffect, useRef, useState } from "react";
// import TypewriterComponent from "typewriter-effect";
import useLenis from "@/hooks/useLenis";
import Header from "@/components/section/HomeSection/header";
import Hero from "@/components/section/HomeSection/Hero";
import Breif from "@/components/section/HomeSection/Breif";
// import { gsap } from "gsap";
// import Image from "next/image";
// import img1 from "@/components/assets/Images/Dc_logo.png";

import Newsletter from "@/components/section/HomeSection/Newsletter";
import Aids from "@/components/section/HomeSection/Aids";
import Project from "@/components/section/HomeSection/Project";
import Giving from "@/components/section/HomeSection/Giving";
import Footer from "@/components/section/HomeSection/Footer";
import Cta from "@/components/section/HomeSection/Cta";

export default function Home() {
  useLenis();
  // const [isIntroVisible, setIsIntroVisible] = useState(true);
  // const heartRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.set(heartRef.current, { scale: 0, y: 500, opacity: 0 });
  //     const tl = gsap.timeline({ delay: 2.5 });
  //     tl.to(heartRef.current, {
  //       scale: 5,
  //       y: -10,
  //       duration: 2,
  //       opacity: 1,
  //       ease: "power1.inOut",
  //     }).to(heartRef.current, {
  //       scale: 1500,
  //       duration: 2,
  //       opacity: 1,
  //       ease: "power1.inOut",
  //     });
  //   });
  //   return () => ctx.revert();
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsIntroVisible(false);
  //   }, 6200); // Animation duration
  //   return () => clearTimeout(timer);
  // }, [isIntroVisible]);
  return (
    <>
      {/* {isIntroVisible && ( //Runs the first animation if it's true
        <>
          <div
            id="intro"
            className="fixed w-full min-h-screen text-primary bg-[#ffffff] flex items-center justify-center z-50 flex-col entbody"
          >
            <Typewriter />

            <div className=" w-8" ref={heartRef}>
              <Image src={img1} alt="/" />
            </div>
          </div>
        </>
      )} */}

      <div
        id="main-content"
        className={`lg:w-full sm:w-[100vw] overflow-hidden relative  transition-all duration-500 `}
      >
        <Header />
        <section>
          <Hero />
        </section>
        <section>
          <Breif />
        </section>
        <section>
          <Cta />
        </section>
        <section>
          <Newsletter />
        </section>
        <section>
          <Project />
        </section>
        <section className="relative">
          <Giving Bg />
        </section>

        <section>
          <Aids />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}
