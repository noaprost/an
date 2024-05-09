"use client";
import KakaoIcon from "./ui/KakaoIcon";

export default function AdForm() {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    // 채널에 사용자를 추가
  };
  return (
    <section className="mt-96 flex flex-col items-center text-4xl">
      <div className="flex gap-3">
        <KakaoIcon />
        <p>플러스 친구를 추가하고 AN 출시 소식을 받아보세요</p>
      </div>
      <p className="mt-3">사전 예약 신청을 받아 3개월 무료 이용권을 드려요</p>
      <button
        className="bg-gradient-to-tr from-amber-200 via-emerald-400 to-blue-400 px-5 py-2 text-3xl rounded-xl mt-16 text-black outline-none hover:from-amber-300 hover:via-emerald-500 hover:to-blue-500"
        onClick={handleClick}
      >
        AN 카톡 친구 추가하기
      </button>
    </section>
  );
}
