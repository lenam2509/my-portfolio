import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full shadow-md bg-white p-2">
      <nav className="flex items-center justify-between mx-auto max-w-[1400px]">
        <Link className="text-md sm:text-2xl  font-bold text-blue-500" href="/">
          LE VIET NAM
        </Link>
        <div className="flex gap-4 text-sm sm:text-lg font-semibold text-blue-400">
          <Link href="/">
            About
            <p className="w-10 mx-auto h-1 bg-blue-300"></p>
          </Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </nav>
    </header>
  );
}
