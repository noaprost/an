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
    <section className="text-5xl flex flex-col items-center py-72">
      <div>
        <div className={`${scroll && "animate-fade-in-up"}`}>
          <p>이처럼 단 두 단계의 과정으로</p>
          <p className="mt-3 text-blue-500">누구나 쉽고, 빠르게</p>
        </div>
        <p className={`mt-24 ${scroll2 && "animate-fade-in-up"}`}>
          전문 편집자가 없어도 <span className="text-blue-500">전문가</span>처럼
        </p>
      </div>
    </section>
  );
}
