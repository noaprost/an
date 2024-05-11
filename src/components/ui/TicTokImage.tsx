import Image from "next/image";
import TicTok from "../../../public/images/tictok.png";

export default function TicTokImage() {
  return (
    <Image
      src={TicTok}
      alt="Tictok"
      width={35}
      height={35}
      className="lg:ml-2 lg:scale-100 md:scale-80 scale-75"
    />
  );
}
