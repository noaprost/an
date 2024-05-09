import Image from "next/image";
import TicTok from "../../../public/images/tictok.png";

export default function TicTokImage() {
  return (
    <Image src={TicTok} alt="Tictok" width={35} height={35} className="ml-2" />
  );
}
