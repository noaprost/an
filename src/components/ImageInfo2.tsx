"use client";
import Image from "next/image";
import SurpriseImage from "../../public/images/surprise.jpg";
import PlayIcon from "./ui/PlayIcon";
import { useEffect, useState } from "react";

export default function ImageInfo2() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 250) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <div
      className={`flex flex-col items-center lg:gap-5 md:gap-3 gap-1 lg:pb-40 md:pb-40 pb-52 bg-blue-50 ${
        scroll && "animate-fade-in"
      }`}
    >
      <div>
        <Image
          src={SurpriseImage}
          alt="surprise face"
          className="w-full lg:h-72 md:h-60 h-48 object-cover rounded-2xl"
        />
        <p className="font-sans relative lg:bottom-9 lg:-right-52 md:bottom-8 bottom-6 -right-1/2 lg:text-lg md:text-md text-sm font-semibold text-white">
          대박
        </p>
        <PlayIcon />
      </div>
      <p className="lg:text-4xl md:text-2xl text-xl">
        해당 영상 스타일로 편집된 영상
      </p>
    </div>
  );
}
