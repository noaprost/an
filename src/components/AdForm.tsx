"use client";
import { useEffect, useState } from "react";
import KakaoIcon from "./ui/KakaoIcon";

export default function AdForm() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 3200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    // 채널에 사용자를 추가
  };
  return (
    <section className="mt-52 flex flex-col items-center lg:text-4xl md:text-3xl text-lg">
      <div className="flex gap-3">
        <KakaoIcon />
        <p>플러스 친구를 추가하고 AN 출시 소식을 받아보세요</p>
      </div>
      <p className="lg:mt-3 mt-1">
        사전 예약 신청을 받아{" "}
        <span className="text-blue-900">3개월 무료 이용권</span>을 드려요
      </p>
      <div className={`${scroll && "animate-wiggle"}`}>
        <button
          className="bg-gradient-to-tr from-amber-200 via-emerald-400 to-blue-400 px-5 py-2 lg:text-3xl md:text-2xl text-xl rounded-xl mt-12 text-black outline-none hover:from-amber-300 hover:via-emerald-500 hover:to-blue-500 shadow-lg active:opacity-70"
          onClick={handleClick}
        >
          AN 카톡 친구 추가하기
        </button>
      </div>
    </section>
  );
}
