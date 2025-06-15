"use client";
import useLenis from "@/hooks/useLenis";
import Header from "@/components/section/HomeSection/header";
import Hero from "@/components/section/HomeSection/Hero";
import Breif from "@/components/section/HomeSection/Breif";
import Newsletter from "@/components/section/HomeSection/Newsletter";
import Aids from "@/components/section/HomeSection/Aids";
import Project from "@/components/section/HomeSection/Project";
import Giving from "@/components/section/HomeSection/Giving";
import Footer from "@/components/section/HomeSection/Footer";
import Cta from "@/components/section/HomeSection/Cta";

export default function Home() {
  useLenis();
  return (
    <div
      id="main-content"
      className={`lg:w-full sm:w-[100vw] overflow-hidden relative transition-all duration-500 `}
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
        <Giving Bg={false} />
      </section>
      <section className="flex justify-center">
        <div className="border w-[80%]"></div>
      </section>
      <section>
        <Aids />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
