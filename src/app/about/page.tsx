"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header with fade + scale animation */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-pink-100 via-indigo-100 to-blue-100 py-24 text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-serif font-bold text-indigo-700 mb-4"
        >
          About Primrose Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg text-gray-700"
        >
          Passionate about crafting experiences that leave lasting impressions.
        </motion.p>
      </motion.section>

      {/* Who We Are with scroll animation */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              At Primrose Events, we're a team of creative planners, designers, and coordinators
              who thrive on transforming your vision into memorable realities.
              From intimate gatherings to grand celebrations, we manage every detail with precision and passion.
            </p>
            <p className="text-gray-600">
              Founded in 2015, our mission has always been to blend elegance, fun, and flawless execution.
              Our success is measured by the smiles on our clients' faces.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/team.jpg"
              alt="Our Team"
              width={500}
              height={350}
              className="rounded-2xl shadow-md"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Creativity",
                description:
                  "We bring fresh, innovative ideas to every event, tailored to your unique vision.",
              },
              {
                title: "Precision",
                description:
                  "Details matter. We plan and execute with care to ensure everything is just right.",
              },
              {
                title: "Trust",
                description:
                  "We're here to support you every step of the way—stress-free and transparent.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center py-20 bg-indigo-600 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Let’s Start Planning Together</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Whether it’s a small celebration or a major event, we’d love to help bring it to life.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </motion.section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Primrose Events. All rights reserved.
      </footer>
    </div>
  );
}
