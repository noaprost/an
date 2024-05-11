import Image from "next/image";
import TicTok from "../../../public/images/tictok.png";

export default function TicTokImage() {
  return (
    <Image
      src={TicTok}
      alt="Tictok"
      width={28}
      height={28}
      className="lg:ml-2"
    />
  );
}
