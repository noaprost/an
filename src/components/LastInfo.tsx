"use client";

import { useEffect, useState } from "react";

export default function LastInfo() {
  const [scroll, setScroll] = useState(false);
  const [scroll2, setScroll2] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 2580) {
      setScroll(true);
    } else {
      setScroll(false);
    }

    if (window.scrollY >= 2680) {
      setScroll2(true);
    } else {
      setScroll2(false);
    }
  };
  return (
    <section className="lg:text-5xl md:text-5xl text-2xl flex flex-col items-center lg:py-72 md:py-72 py-80">
      <div>
        <div className={`${scroll && "animate-fade-in-up"}`}>
          <p>이처럼 단 두 단계의 과정으로</p>
          <p className="mt-3 text-blue-500">누구나 쉽고, 빠르게</p>
        </div>
        <p
          className={`lg:mt-24 md:mt:24 mt-16 ${
            scroll2 && "animate-fade-in-up"
          }`}
        >
          전문 편집자가 없어도 <span className="text-blue-500">전문가</span>처럼
        </p>
      </div>
    </section>
  );
}
