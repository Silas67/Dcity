import React from "react";
import Image from "next/image";
import img1 from "@/components/assets/Images/DHM.jpeg";
import img2 from "@/components/assets//Images/Camp.png";
import img3 from "@/components/assets/Images/Hero6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <Swiper
        effect="fade"
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        speed={2000}
      >
        <SwiperSlide>
          <div className="w-full flex items-center justify-start h-[90vh] bg-hero max-sm:h-[80vh]">
            <div className="uppercase mx-10">
              <div className="text-[0.875rem] text-neutral-300">Welcome to</div>
              <div className="text-[7rem] font-extrabold text-background leading-[6rem] text ">
                Dominion <br />
                City
              </div>
              <div className="text-[12px] text-neutral-400 tracking-widest p-2">
                Rasing leaders that transforms society
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[90vh] max-sm:h-[80vh]">
            <Image
              src={img1}
              alt="/"
              className="object-cover w-full h-full object-top2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[90vh] max-sm:h-[80vh]">
            <Image src={img2} alt="/" className="object-cover w-full h-full" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[90vh]  max-sm:h-[80vh]">
            <Image src={img3} alt="/" className="object-cover w-full h-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
