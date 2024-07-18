"use client";
import Image from "next/image";
import { projects } from "@/app/projects";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MyProjects() {
  return (
    <div className="w-full min-h-[500px] mt-5 bg-blue-100">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{
          once: true,
        }}
        className="text-center text-2xl font-bold text-blue-500"
      >
        MY PROJECTS
      </motion.h2>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {/* <div className="bg-white p-4 rounded-lg shadow-md">
            <Image alt="img" src="/project1.png" width={400} height={200} />
            <h3 className="text-xl my-2 text-center font-bold text-blue-500">
              J&6 Jewelry Shop
            </h3>
            <p className="text-gray-600 text-lg font-semibold">
              This is an online jewelry selling website created by myself. I use
              React, Nodejs and Mongodb to create it. It has functions such as
              product purchase, payment, product management, invoice management,
              has 2 roles: admin and user, admin page, login and register with
              google.
            </p>
            <div className="flex gap-4 mt-4">
              <p className="bg-blue-300 rounded p-2 font-bold text-blue-700">
                React
              </p>
              <p className="bg-blue-300 rounded p-2 font-bold text-blue-700">
                Nodejs
              </p>
              <p className="bg-blue-300 rounded p-2 font-bold text-blue-700">
                Mongoodb
              </p>
            </div>
          </div> */}
          {projects.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{
                once: true,
              }}
              key={project.id}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <Image
                alt="img"
                className="w-full"
                src={project.image}
                width={400}
                height={200}
              />
              <h3 className="text-xl my-2 text-center font-bold text-blue-500">
                {project.name}
              </h3>
              <p className="text-gray-600 text-lg font-semibold h-[200px] overflow-y-scroll">
                {project.description}
              </p>
              <div className="flex gap-4 mt-4">
                {project.technologies.map((tech, index) => (
                  <p
                    key={index}
                    className="bg-blue-300 rounded p-2 font-bold text-blue-700"
                  >
                    {tech}
                  </p>
                ))}
              </div>
              <div className="flex gap-4 mt-2">
                <Link
                  href={project.demo}
                  className=" underline font-bold text-blue-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </Link>
                <Link
                  href={project.source}
                  className=" underline font-bold text-blue-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
