import Link from "next/link";
import { FaPhoneAlt, FaFacebook, FaDiscord } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

export default function Navbar() {
  return (
    <header className="w-full shadow-md bg-white p-2">
      <nav className="flex items-center justify-between mx-auto max-w-[1400px]">
        <Link className="text-md sm:text-2xl  font-bold text-blue-500" href="/">
          LE VIET NAM
        </Link>
        <div className="flex items-center gap-4 text-sm sm:text-lg font-semibold text-blue-400">
          <Link href="https://zalo.me/0355019207">
            <SiZalo size={30} />
          </Link>
          <div className="flex items-center gap-1">
            <FaPhoneAlt size={25} />
            <span>0355019207</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
