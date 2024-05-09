import AdForm from "@/components/AdForm";
import ImageInfo1 from "@/components/ImageInfo1";
import ImageInfo2 from "@/components/ImageInfo2";
import LastInfo from "@/components/LastInfo";
import MainInfo from "@/components/MainInfo";
import SubInfo from "@/components/SubInfo";

export default function MainPage() {
  return (
    <section>
      <MainInfo />
      <SubInfo />
      <ImageInfo1 />
      <ImageInfo2 />
      <LastInfo />
      <AdForm />
    </section>
  );
}
