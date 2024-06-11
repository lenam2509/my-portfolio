"use client";

// WaveText.js
import React from "react";
import { motion } from "framer-motion";

// Hàm để chia nhỏ chuỗi thành từng ký tự
const splitText = (text: string) => {
  return text.split("");
};

// Các hiệu ứng Framer Motion
const waveAnimation = {
  hidden: { y: 0 },
  visible: (i: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      delay: i * 0.1,
      repeat: Infinity,
    },
  }),
};

const WaveText = ({ text }: { text: string }) => {
  const characters = splitText(text);

  return (
    <div>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={waveAnimation}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default WaveText;
