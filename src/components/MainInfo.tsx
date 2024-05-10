import InstagramIcon from "@/components/ui/InstagramIcon";
import TicTokImage from "@/components/ui/TicTokImage";
import YoutubeIcon from "@/components/ui/YoutubeIcon";

export default function MainInfo() {
  return (
    <section className="flex flex-col items-center gap-20 py-40 bg-blue-50">
      <p className="font-bold text-7xl animate-fade-in">
        AI 영상 편집 서비스 <span className="text-blue-600">AN</span>
      </p>
      <div className="text-5xl animate-fade-in">
        <div className="flex gap-20 ml-10 mb-4">
          <YoutubeIcon />
          <TicTokImage />
          <InstagramIcon />
        </div>
        <p className="text-left">유튜브, 틱톡, 인스타에</p>
        <p className="ml-40 mt-3">업로드할 영상 편집을 간편하게</p>
      </div>
    </section>
  );
}
