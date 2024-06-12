"use client";

import Link from "next/link";
import { FaPhoneAlt, FaFacebook, FaDiscord } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hiden, setHiden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 50) {
      setHiden(true);
    } else {
      setHiden(false);
    }
  });

  return (
    <motion.header
      variants={{
        hidden: { y: "-100%" },
        visible: { y: 0 },
      }}
      animate={hiden ? "hidden" : "visible"}
      initial="visible"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className=" sticky z-50 top-0 w-full shadow-md bg-white p-2"
    >
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
    </motion.header>
  );
}
