import Image from "next/image";
import SurpriseImage from "../../public/images/surprise.jpg";

export default function ImageInfo2() {
  return (
    <section className="mt-96 flex flex-col items-center gap-10">
      <div className="">
        <Image
          src={SurpriseImage}
          alt="surprise face"
          className="w-full h-72 object-cover rounded-2xl"
        />
        <p className="font-sans relative bottom-8 -right-52 text-lg font-semibold text-white">
          대박
        </p>
      </div>
      <p className="text-4xl">해당 스타일로 편집된 영상</p>
    </section>
  );
}
