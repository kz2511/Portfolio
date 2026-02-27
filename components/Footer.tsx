"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { PiArrowUpRightBold } from "react-icons/pi";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-16 pb-8" id="contact">
      <div className="w-full absolute min-h-96 left-0 bottom-0">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={100}
          height={100}
          className="w-full h-full max-h-[2000px] opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-1">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to build your next{" "}
          <span className="text-purple">AI-powered</span> solution?
        </h1>
        <p className="text-white-200 text-sm md:text-base md:mt-8 my-4">
          Reach out to me today and let&apos;s discuss how AI and data
          engineering can transform your product.
        </p>

        <Link href={"mailto:kunalzaveri11@gmail.com"}>
          <MagicButton
            title="Let's get in touch"
            icon={<PiArrowUpRightBold />}
            position="right"
          />
        </Link>
      </div>

      <div className="w-full flex items-center justify-between mt-12 max-sm:flex-col md:gap-3 gap-6 relative z-1">
        <p className="md:text-sm text-xs md:font-normal font-light text-white-200">
          Designed &amp; Developed by{" "}
          <span className="text-purple font-semibold">Kunal Zaveri</span> ·{" "}
          {new Date().getFullYear()}
        </p>

        <ul className="flex gap-2">
          {socialMedia.map(({ id, img, link }) => (
            <Link href={link} key={id} target="_blank">
              <div className="cursor-pointer w-10 h-10 rounded-lg border border-[rgb(26_30_57)] flex-center shadow-[inset_0px_0px_8px_0.82px_rgba(255,255,255,0.10)]">
                <Image
                  src={img}
                  alt="icons"
                  width={20}
                  height={20}
                  style={{ width: "auto" }}
                />
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
