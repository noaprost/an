import DownArrowIcon from "./ui/DownArrowIcon";
import PlusCircleIcon from "./ui/PlusCircleIcon";
import PlusIcon from "./ui/PlusIcon";

export default function ImageInfo1() {
  return (
    <section className="mt-96 text-3xl flex flex-col items-center gap-20">
      <div className="flex justify-center items-center gap-20">
        <div className="flex flex-col items-center gap-2">
          <p>기존 영상을 업로드 하고</p>
          <div className="w-72 h-72 border-4 border-neutral-400 rounded-xl flex justify-center items-center bg-amber-100">
            <PlusCircleIcon />
          </div>
          <p className="text-neutral-700 text-2xl">또는 영상 링크</p>
        </div>
        <PlusIcon />
        <div className="flex flex-col items-center gap-2">
          <p>풀영상을 업로드 하면</p>
          <div className="w-72 h-72 border-4 border-neutral-400 rounded-xl flex justify-center items-center bg-blue-100">
            <PlusCircleIcon />
          </div>
          <p className="text-white">o</p>
        </div>
      </div>
      <DownArrowIcon />
    </section>
  );
}
