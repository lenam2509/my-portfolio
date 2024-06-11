"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center sm:flex sm:flex-row mt-5 ">
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center">
        <motion.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl  text-blue-400 font-bold"
        >
          Hi there, I'm LE VIET NAM 👋
        </motion.h1>
        <motion.p
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-lg px-1 sm:text-2xl text-blue-400 font-semibold text-center"
        >
          I'm a front-end developer live in Vietnam and I have 1 year experience
          in web development.
        </motion.p>
        <motion.div variants={heroVariants} initial="hidden" animate="visible">
          <Button className=" bg-blue-500 mt-5">Hire me</Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full sm:w-1/2"
      >
        <Image src="/hero-bg.png" alt="Hero" width={1000} height={500} />
      </motion.div>
    </div>
  );
}
