import Image from "next/image";
import User1 from "../../public/images/user1.png";
import User2 from "../../public/images/user2.png";

export default function SubInfo() {
  return (
    <section className="mt-48 flex flex-col gap-20 px-8">
      <div className="flex justify-between px-44 items-center">
        <div className="flex flex-col gap-2">
          <p className="text-4xl">
            <span className="text-blue-500">AN</span>은 학습된 AI 모델을
            이용하여
          </p>
          <p className="text-4xl">기존 편집 스타일을 유지하면서</p>
          <p className="text-4xl">풀영상을 원하는 유형에 맞게 편집해드려요</p>
        </div>
        <Image
          src={User2}
          alt="pro user"
          className="object-cover rounded-full w-56 h-56 shadow-xl"
        />
      </div>

      <div className="flex justify-between px-44 items-center">
        <Image
          src={User1}
          alt="pro user"
          className="object-cover rounded-full w-64 h-64"
        />
        <div className="flex flex-col gap-2 items-end">
          <p className="text-4xl">
            <span className="font-bold underline">
              처음 영상을 업로드해보는 이용자
            </span>
            도
          </p>
          <p className="text-4xl">마음에 드는 영상을 선택해서</p>
          <p className="text-4xl">비슷한 느낌을 낼 수 있어요</p>
        </div>
      </div>
    </section>
  );
}
