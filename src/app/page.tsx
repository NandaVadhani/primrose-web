"use client";

import Image from "next/image";
import { CalendarDays, Gift, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-indigo-50 to-blue-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 py-24"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-serif font-bold text-indigo-700 mb-4"
        >
          Crafting Unforgettable Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl mx-auto text-lg text-gray-700 mb-8"
        >
          Primrose Events is your trusted partner for weddings, birthdays, and corporate experiences.
        </motion.p>
        <motion.a
          href="./contact"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition"
        >
          Let's Talk
        </motion.a>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 py-20 bg-white"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 py-24 bg-indigo-600 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Let's Plan Together</h2>
        <p className="max-w-lg mx-auto mb-6">
          Share your ideas and requirements, and we'll help bring them to life with creativity and precision.
        </p>
        <a
          href="./contact"
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

const serviceData = [
  {
    icon: <Gift className="text-indigo-600 w-10 h-10 mx-auto mb-4" />,
    title: "Weddings",
    description: "We plan Primrose weddings that reflect your style and love story.",
  },
  {
    icon: <PartyPopper className="text-indigo-600 w-10 h-10 mx-auto mb-4" />,
    title: "Birthday Parties",
    description: "From kids to adults — unforgettable birthday experiences for all ages.",
  },
  {
    icon: <CalendarDays className="text-indigo-600 w-10 h-10 mx-auto mb-4" />,
    title: "Corporate Events",
    description: "Professional setups, conferences, and team outings made seamless.",
  },
];

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
