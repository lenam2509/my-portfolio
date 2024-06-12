"use client";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uctrz87",
        "template_pgfyhjn",
        form.current as HTMLFormElement,
        {
          publicKey: "ycihj8TWLrU5kWQzh",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current?.reset();
          toast.success("Message sent successfully!", {
            position: "top-center",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Message failed to send!", {
            position: "top-center",
          });
        }
      );
  };

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

      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col items-center mt-5">
          <motion.input
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            type="text"
            placeholder="Name"
            name="name"
            className="w-1/2 p-2 border border-blue-600 rounded-md outline-none"
            required
          />
          <motion.input
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            viewport={{ once: true }}
            type="email"
            placeholder="Email"
            name="email"
            className="w-1/2 p-2 mt-3 border border-blue-600 rounded-md outline-none"
            required
          />
          <motion.textarea
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            viewport={{ once: true }}
            placeholder="Message"
            name="message"
            className="w-1/2 p-2 mt-3 border border-blue-600 rounded-md outline-none"
            required
            rows={5}
          ></motion.textarea>

          <motion.button
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            viewport={{ once: true }}
            className="w-1/2 p-2 mt-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-400"
            type="submit"
          >
            Send
          </motion.button>
        </div>
      </form>
    </div>
  );
}
