"use client";

import { motion } from "framer-motion";

export default function BlogPage() {
  const posts = [
    {
      title: "5 Tips to Plan a Stress-Free Wedding",
      excerpt:
        "From setting a timeline to choosing vendors, here are five practical tips for smooth wedding planning.",
      date: "July 1, 2025",
    },
    {
      title: "Top 10 Birthday Themes for Kids in 2025",
      excerpt:
        "Explore the most loved themes — from superheroes to fairy tales — to make your kid’s birthday unforgettable.",
      date: "June 18, 2025",
    },
    {
      title: "Corporate Event Trends to Watch",
      excerpt:
        "Discover how hybrid events, immersive experiences, and personalization are shaping the future of corporate gatherings.",
      date: "May 30, 2025",
    },
  ];

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
          Our Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg text-gray-700"
        >
          Event inspiration, planning tips, and the latest industry trends.
        </motion.p>
      </motion.section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-indigo-700 mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
              <p className="text-gray-400 text-xs">{post.date}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Primrose Events. All rights reserved.
      </footer>
    </div>
  );
}
