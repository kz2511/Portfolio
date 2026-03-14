import React from "react";
import { Spotlight } from "./ui/SpotLight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { PiArrowUpRightBold, PiDownloadSimpleBold } from "react-icons/pi";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-16 pt-28">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* background */}
      <div className="h-screen w-full bg-white bg-grid-black/[0.1] absolute top-0 left-0 flex items-center justify-center">
        <div
          className="absolute pointer-events-none inset-0 flex-center bg-white 
        [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"
        />
      </div>
      {/* background */}

      <div className="flex justify-center relative my-16 z-10">
        <div className="flex-center flex-col lg:max-w-[60vw] md:max-w-2xl max-w-[89vw]">
          <p className="uppercase tracking-widest text-xs font-semibold text-primary max-w-80 text-center">
            AI · Data Engineering · Generative AI
          </p>

          <TextGenerateEffect
            words="Building Intelligent Systems That Turn Data into Impact"
            className="text-center text-[2em] md:text-4xl lg:text-5xl text-foreground"
          />

          <p className="text-center text-3xl md:text-5xl lg:text-6xl font-extrabold mt-6 tracking-tight text-gradient">
            Kunal Zaveri
          </p>
          <p className="text-center md:tracking-wider mb-5 text-sm md:text-base lg:text-lg mt-2 text-muted-foreground font-medium">
            Sr. AI Developer &amp; Data Engineer · Ahmedabad, India · 5+ Years
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href={"#projects"}>
              <MagicButton
                title="Explore My Work"
                icon={<PiArrowUpRightBold />}
                position="right"
              />
            </Link>

            <a href="/kunal_zaveri.pdf" download="Kunal_Zaveri_Resume.pdf">
              <MagicButton
                title="Download Resume"
                icon={<PiDownloadSimpleBold />}
                position="left"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
