"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="w-full mt-5 bg-blue-100 min-h-[500px]">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="font-bold text-center text-2xl text-blue-500"
      >
        CONTACT ME
      </motion.h2>
      <form>
        <div className="flex flex-col items-center mt-5">
          <motion.input
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            type="text"
            placeholder="Name"
            className="w-1/2 p-2 border border-blue-600 rounded-md outline-none"
          />
          <motion.input
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            viewport={{ once: true }}
            type="email"
            placeholder="Email"
            className="w-1/2 p-2 mt-3 border border-blue-600 rounded-md outline-none"
          />
          <motion.textarea
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            viewport={{ once: true }}
            placeholder="Message"
            className="w-1/2 p-2 mt-3 border border-blue-600 rounded-md outline-none"
            rows={5}
          ></motion.textarea>
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            viewport={{ once: true }}
            className="w-1/2 p-2 mt-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-400"
          >
            Send
          </motion.button>
        </div>
      </form>
    </div>
  );
}
