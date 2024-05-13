import DownArrowIcon from "./ui/DownArrowIcon";
import PlusCircleIcon from "./ui/PlusCircleIcon";
import PlusIcon from "./ui/PlusIcon";

export default function ImageInfo1() {
  return (
    <section className="mt-48 flex flex-col items-center gap-20 lg:pt-40 md:pt-40 pt-60 bg-blue-50">
      <div className="flex justify-center items-center lg:gap-20 md:gap-10 gap-3">
        <div className="flex flex-col items-center gap-3">
          <p className="lg:text-3xl md:text-2xl text-md">
            기존 영상을 업로드 하고
          </p>
          <div className="lg:w-72 lg:h-48 md:w-60 md:h-36 w-36 h-24 rounded-xl flex justify-center items-center bg-amber-100">
            <PlusCircleIcon />
          </div>
          <p className="text-neutral-700 lg:text-2xl md:text-xl text-md">
            또는 영상 링크
          </p>
        </div>
        <PlusIcon />
        <div className="flex flex-col items-center gap-3">
          <p className="lg:text-3xl md:text-2xl text-md">
            풀영상을 업로드 하면
          </p>
          <div className="lg:w-72 lg:h-48 md:w-60 md:h-36 w-36 h-24 rounded-xl flex justify-center items-center bg-blue-200">
            <PlusCircleIcon />
          </div>
          <p className="text-white">o</p>
        </div>
      </div>
      <DownArrowIcon />
    </section>
  );
}
