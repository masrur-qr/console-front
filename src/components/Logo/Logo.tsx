import Image from "next/image";

import LogoImage from "../../../public/logo.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/en"} className="relative z-[1001]">
      <Image src={LogoImage} alt="Console Logo Image"/>
    </Link>
  );
}
