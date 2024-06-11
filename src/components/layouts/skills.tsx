"use client";

import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="w-full mt-10 bg-blue-100">
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-2xl text-blue-500 font-bold"
      >
        MY SKILLS
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex items-center justify-center gap-4 flex-wrap"
      >
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          className="w-[100px] bg-white min-h-[100px] border-2 my-5 shadow-lg rounded-lg flex justify-center items-center"
        >
          <FaReact className="text-4xl text-blue-500" size={"50"} />
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          className="w-[100px] bg-white min-h-[100px] border-2 my-5 shadow-lg rounded-lg flex justify-center items-center"
        >
          <RiNextjsFill className="text-4xl text-black" size={"50"} />
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          className="w-[100px] bg-white min-h-[100px] border-2 my-5 shadow-lg rounded-lg flex justify-center items-center"
        >
          <FaHtml5 className="text-4xl text-orange-600" size={"50"} />
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          className="w-[100px] bg-white min-h-[100px] border-2 my-5 shadow-lg rounded-lg flex justify-center items-center"
        >
          <FaCss3Alt className="text-4xl text-blue-500" size={"50"} />
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          className="w-[100px] bg-white min-h-[100px] border-2 my-5 shadow-lg rounded-lg flex justify-center items-center"
        >
          <IoLogoJavascript className="text-4xl text-yellow-500" size={"50"} />
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          className="w-[100px] bg-white min-h-[100px] border-2 my-5 shadow-lg rounded-lg flex justify-center items-center"
        >
          <SiTypescript className="text-4xl text-blue-500" size={"50"} />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          className="w-[100px] bg-white min-h-[100px] border-2 my-5 shadow-lg rounded-lg flex justify-center items-center"
        >
          <FaNodeJs className="text-4xl text-green-500" size={"50"} />
        </motion.div>
      </motion.div>
    </div>
  );
}
