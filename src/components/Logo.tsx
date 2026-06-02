import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="relative h-15 w-15 md:h-25 md:w-25 py-2">
      <Image
        src="/logo_svart.svg"
        alt="Logo"
        fill
        className="object-contain"
        priority
      />
    </Link>
  );
}