"use client";
import Image from "next/image";
import User1 from "../../public/images/user1.png";
import User2 from "../../public/images/user2.png";
import { useEffect, useState } from "react";

export default function SubInfo() {
  const [scroll, setScroll] = useState(false);
  const [scroll2, setScroll2] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    if (window.scrollY >= 500) {
      setScroll2(true);
    } else {
      setScroll2(false);
    }
  };
  return (
    <section className="lg:mt-48 md:mt-48 mt-52 flex flex-col lg:gap-20 md:gap-16 gap-14 px-8">
      <div
        className={`flex justify-between lg:px-44 md:px-16 px-6 items-center ${
          scroll && "animate-fade-in-up"
        }`}
      >
        <div className="flex flex-col gap-2 text-lg md:text-2xl lg:text-4xl">
          <p>
            <span className="text-blue-500">AN</span>은 학습된 AI 모델을
            이용하여
          </p>
          <p>기존 편집 스타일을 유지하면서</p>
          <p>풀영상을 원하는 유형에 맞게 편집해드려요</p>
        </div>
        <Image
          src={User2}
          alt="pro user"
          className="object-cover rounded-full lg:w-56 lg:h-56 md:w-36 md:h-36 w-20 h-20 shadow-xl lg:mb-0 md:mb-0 mb-3"
        />
      </div>

      <div
        className={`flex justify-between lg:px-44 md:px-16 px-6 items-center ${
          scroll2 && "animate-fade-in-up"
        }`}
      >
        <Image
          src={User1}
          alt="pro user"
          className="object-cover rounded-full lg:w-64 lg:h-64 md:w-40 md:h-40 w-24 h-24"
        />
        <div className="flex flex-col gap-2 items-end text-lg md:text-2xl lg:text-4xl">
          <p>
            <span className="font-bold underline">
              처음 영상을 업로드해보는 이용자
            </span>
            도
          </p>
          <p>마음에 드는 영상을 선택해서</p>
          <p>비슷한 느낌을 낼 수 있어요</p>
        </div>
      </div>
    </section>
  );
}
