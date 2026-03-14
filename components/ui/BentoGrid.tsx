"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnim } from "./BackgroundGradientAnim";
import { useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

// CSS-only globe fallback (avoids WebGL requirement)
const GlobeFallback = () => (
  <div className="w-full h-full flex items-center justify-center absolute inset-0 -z-10 opacity-60">
    <div className="relative w-36 h-36 md:w-56 md:h-56">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 opacity-80 animate-pulse" />
      <div className="absolute inset-2 rounded-full bg-gradient-to-tl from-purple-50 via-blue-50 to-cyan-50 opacity-60" />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 60%, rgba(168,85,247,0.3) 70%, transparent 80%)",
          animation: "spin 8s linear infinite",
        }}
      />
      <div className="absolute inset-4 rounded-full border border-primary/20" />
      <div className="absolute inset-8 rounded-full border border-primary/10" />
    </div>
  </div>
);

import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full py-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Python", "LangChain", "FastAPI"];
  const rightLists = ["PyTorch", "Spark", "OpenAI"];
  const email = "kunalzaveri11@gmail.com";
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        `row-span-1 rounded-3xl overflow-hidden relative border border-border group/bento 
        hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-md 
        bg-white
        justify-between flex flex-col space-y-4`,
        className,
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
          {id === 1 && (
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id == 6 && (
          <BackgroundGradientAnim>
            <div
              className="absolute z-50 inset-0 flex items-center justify-center 
            text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl 
            lg:text-7xl"
            ></div>
          </BackgroundGradientAnim>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 flex flex-col md:h-full min-h-40 p-5 lg:p-10 h-full z-10 relative",
          )}
        >
          <div className={cn("font-sans font-medium text-sm md:text-sm lg:text-base z-10 leading-relaxed", id === 1 ? "text-slate-800 font-semibold max-w-lg mb-2" : "text-muted-foreground")}>
            {description}
          </div>
          <div
            tabIndex={1}
            role="dialog"
            className={cn(
              "font-sans text-lg lg:text-3xl max-w-96 font-bold z-10",
              id === 6 ? "text-white text-center md:text-left" : "text-foreground"
            )}
          >
            {title}
          </div>
          {id == 3 && (
            <div className="flex gap-2 lg:gap-3 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-2 lg:gap-3 ">
                <span className="py-4 px-3 rounded-md text-center bg-blue-50/50"></span>
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-5 py-4 lg:py-6 lg:p-8 lg:text-sm font-medium text-primary text-center rounded-md bg-blue-50/80 border border-blue-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2 lg:gap-3">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-5 py-4 lg:py-6 lg:p-8 lg:text-sm font-medium text-primary text-center rounded-md bg-blue-50/80 border border-blue-100"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-md text-center bg-blue-50/50"></span>
              </div>
            </div>
          )}
          {id == 6 && (
            <div className="mt-5" tabIndex={0}>
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  style={{ height: 200, width: 400 }}
                />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handelClick={handleCopy}
                otherClasses="!bg-white !text-foreground border border-border hover:bg-gray-50"
              />
            </div>
          )}
          {id == 2 && (
            <>
              <GlobeFallback />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
