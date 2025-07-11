"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <motion.section
        initial={{ opacity: 0, y: -40 }}
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
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg text-gray-700"
        >
          We'd love to hear about your event. Reach out to start planning together!
        </motion.p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 px-6 max-w-xl mx-auto"
      >
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-indigo-400"
              placeholder="Your full name"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-indigo-400"
              placeholder="you@example.com"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-indigo-400"
              placeholder="Tell us about your event..."
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Primrose Events. All rights reserved.
      </footer>
    </div>
  );
}
