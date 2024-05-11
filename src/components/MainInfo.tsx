import InstagramIcon from "@/components/ui/InstagramIcon";
import TicTokImage from "@/components/ui/TicTokImage";
import YoutubeIcon from "@/components/ui/YoutubeIcon";

export default function MainInfo() {
  return (
    <section className="flex flex-col items-center gap-20 lg:py-40 md:py-40 py-52 bg-blue-50">
      <p className="font-bold text-4xl md:text-5xl lg:text-7xl animate-fade-in">
        AI 영상 편집 서비스 <span className="text-blue-600">AN</span>
      </p>
      <div className="text-2xl md:text-3xl lg:text-5xl animate-fade-in">
        <div className="flex lg:gap-20 md:gap-12 gap-5 lg:ml-10 md:ml-5 ml-3 lg:mb-4 md:mb-3 items-center">
          <YoutubeIcon />
          <TicTokImage />
          <InstagramIcon />
        </div>
        <p className="text-left">유튜브, 틱톡, 인스타에</p>
        <p className="lg:ml-40 md:ml-36 ml-24 lg:mt-3 md:mt-2">
          업로드할 영상 편집을 간편하게
        </p>
      </div>
    </section>
  );
}
